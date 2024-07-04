/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SubmissionsWhereInput } from "./SubmissionsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SubmissionsOrderByInput } from "./SubmissionsOrderByInput";

@ArgsType()
class SubmissionsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SubmissionsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SubmissionsWhereInput, { nullable: true })
  @Type(() => SubmissionsWhereInput)
  where?: SubmissionsWhereInput;

  @ApiProperty({
    required: false,
    type: [SubmissionsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SubmissionsOrderByInput], { nullable: true })
  @Type(() => SubmissionsOrderByInput)
  orderBy?: Array<SubmissionsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SubmissionsFindManyArgs as SubmissionsFindManyArgs };