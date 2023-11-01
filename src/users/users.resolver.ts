import { Resolver, Query, Int, Args, ResolveField, Parent } from "@nestjs/graphql";
import { User } from "./user.model";
import { UsersService } from "./user.service"

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
  ) {}

  @Query(returns => User)
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOneById(id);
  }
}