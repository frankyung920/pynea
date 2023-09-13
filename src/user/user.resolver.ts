import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity'

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User, { name: 'getUser' })
  async getUser(@Args('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Query(() => [User], { name: 'listUsers' })
  async listUsers(): Promise<User[]> {
    return this.userService.listUsers();
  }

  @Mutation(() => User, { name: 'createUser' })
  async createUser(@Args('createUserData') createUserData: CreateUserInput): Promise<User> {
   return this.userService.createUser(createUserData);
  }

  @Mutation(() => User, { name: 'updateUser' })
  async updateUser(
    @Args('id') id: string,
    @Args('updateUserData') updateUserData: UpdateUserInput
  ): Promise<User> {
    return this.userService.updateUser(id, updateUserData);
  }
}
