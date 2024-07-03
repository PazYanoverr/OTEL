/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WorkflowsOnEventType } from "../../workflowsOnEventType/base/WorkflowsOnEventType";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  IsString,
  MaxLength,
  Max,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { WorkflowStep } from "../../workflowStep/base/WorkflowStep";
import { EnumWorkflowTimeUnit } from "./EnumWorkflowTimeUnit";
import { EnumWorkflowTrigger } from "./EnumWorkflowTrigger";
import { User } from "../../user/base/User";

@ObjectType()
class Workflow {
  @ApiProperty({
    required: false,
    type: () => [WorkflowsOnEventType],
  })
  @ValidateNested()
  @Type(() => WorkflowsOnEventType)
  @IsOptional()
  activeOn?: Array<WorkflowsOnEventType>;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => [WorkflowStep],
  })
  @ValidateNested()
  @Type(() => WorkflowStep)
  @IsOptional()
  steps?: Array<WorkflowStep>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  time!: number | null;

  @ApiProperty({
    required: false,
    enum: EnumWorkflowTimeUnit,
  })
  @IsEnum(EnumWorkflowTimeUnit)
  @IsOptional()
  @Field(() => EnumWorkflowTimeUnit, {
    nullable: true,
  })
  timeUnit?: "DAY" | "HOUR" | "MINUTE" | null;

  @ApiProperty({
    required: true,
    enum: EnumWorkflowTrigger,
  })
  @IsEnum(EnumWorkflowTrigger)
  @Field(() => EnumWorkflowTrigger, {
    nullable: true,
  })
  trigger?: "BEFORE_EVENT" | "EVENT_CANCELLED" | "NEW_EVENT";

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  user?: User;
}

export { Workflow as Workflow };
