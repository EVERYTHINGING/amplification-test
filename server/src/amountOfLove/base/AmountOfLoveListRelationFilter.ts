/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AmountOfLoveWhereInput } from "./AmountOfLoveWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AmountOfLoveListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AmountOfLoveWhereInput,
  })
  @ValidateNested()
  @Type(() => AmountOfLoveWhereInput)
  @IsOptional()
  @Field(() => AmountOfLoveWhereInput, {
    nullable: true,
  })
  every?: AmountOfLoveWhereInput;

  @ApiProperty({
    required: false,
    type: () => AmountOfLoveWhereInput,
  })
  @ValidateNested()
  @Type(() => AmountOfLoveWhereInput)
  @IsOptional()
  @Field(() => AmountOfLoveWhereInput, {
    nullable: true,
  })
  some?: AmountOfLoveWhereInput;

  @ApiProperty({
    required: false,
    type: () => AmountOfLoveWhereInput,
  })
  @ValidateNested()
  @Type(() => AmountOfLoveWhereInput)
  @IsOptional()
  @Field(() => AmountOfLoveWhereInput, {
    nullable: true,
  })
  none?: AmountOfLoveWhereInput;
}
export { AmountOfLoveListRelationFilter };
