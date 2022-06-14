import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AmountOfLoveService } from "./amountOfLove.service";
import { AmountOfLoveControllerBase } from "./base/amountOfLove.controller.base";

@swagger.ApiTags("amountOfLoves")
@common.Controller("amountOfLoves")
export class AmountOfLoveController extends AmountOfLoveControllerBase {
  constructor(
    protected readonly service: AmountOfLoveService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
