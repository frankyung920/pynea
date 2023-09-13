import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, IsUUID } from 'class-validator';

@InputType()
export class UpdateUserInput {

  @Field({ nullable: true })
  @IsString()
  firstName?: string;

  @Field({ nullable: true })
  @IsString()
  lastName?: string;

  @Field({ nullable: true })
  @IsEmail()
  email?: string;
}
