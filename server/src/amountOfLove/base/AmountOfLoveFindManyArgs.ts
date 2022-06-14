/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AmountOfLoveWhereInput } from "./AmountOfLoveWhereInput";
import { Type } from "class-transformer";
import { AmountOfLoveOrderByInput } from "./AmountOfLoveOrderByInput";

@ArgsType()
class AmountOfLoveFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AmountOfLoveWhereInput,
  })
  @Field(() => AmountOfLoveWhereInput, { nullable: true })
  @Type(() => AmountOfLoveWhereInput)
  where?: AmountOfLoveWhereInput;

  @ApiProperty({
    required: false,
    type: [AmountOfLoveOrderByInput],
  })
  @Field(() => [AmountOfLoveOrderByInput], { nullable: true })
  @Type(() => AmountOfLoveOrderByInput)
  orderBy?: Array<AmountOfLoveOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AmountOfLoveFindManyArgs };
