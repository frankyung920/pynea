import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './entities/user.entity'
import { v4 as uuidv4 } from 'uuid';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) { }

  async createUser(data: CreateUserInput) {
    const { firstName, lastName, email } = data;
    const user: User = {
      id: uuidv4(),
      firstName, lastName, email,
    }
    return this.prismaService.user.create({ data: user });
  }

  async updateUser(id: string, data: UpdateUserInput) {
    const { firstName, lastName, email } = data;
    const user: User = {
      id,
      firstName, lastName, email,
      updatedAt: new Date(),
    }
    return this.prismaService.user.update({ where: { id }, data: user });
  }

  async getUserById(id: string): Promise<User>{
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async listUsers(): Promise<User[]>{
    return this.prismaService.user.findMany();
  }
}
