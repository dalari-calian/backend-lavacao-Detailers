import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(type => Int)
  id: number;

  @Field({ nullable: false })
  login?: string;

  @Field({ nullable: false })
  password?: string;

  @Field({ nullable: false })
  createdAt?: string;
}