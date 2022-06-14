import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AmountOfLoveServiceBase } from "./base/amountOfLove.service.base";

@Injectable()
export class AmountOfLoveService extends AmountOfLoveServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
