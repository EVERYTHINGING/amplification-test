import { Module } from "@nestjs/common";
import { AmountOfLoveModuleBase } from "./base/amountOfLove.module.base";
import { AmountOfLoveService } from "./amountOfLove.service";
import { AmountOfLoveController } from "./amountOfLove.controller";
import { AmountOfLoveResolver } from "./amountOfLove.resolver";

@Module({
  imports: [AmountOfLoveModuleBase],
  controllers: [AmountOfLoveController],
  providers: [AmountOfLoveService, AmountOfLoveResolver],
  exports: [AmountOfLoveService],
})
export class AmountOfLoveModule {}
