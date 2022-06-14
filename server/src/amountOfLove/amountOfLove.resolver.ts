import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AmountOfLoveResolverBase } from "./base/amountOfLove.resolver.base";
import { AmountOfLove } from "./base/AmountOfLove";
import { AmountOfLoveService } from "./amountOfLove.service";

@graphql.Resolver(() => AmountOfLove)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AmountOfLoveResolver extends AmountOfLoveResolverBase {
  constructor(
    protected readonly service: AmountOfLoveService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
