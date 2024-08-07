/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApiKeyCreateNestedManyWithoutAppModelsInput } from "./ApiKeyCreateNestedManyWithoutAppModelsInput";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumAppModelCategories } from "./EnumAppModelCategories";
import { CredentialCreateNestedManyWithoutAppModelsInput } from "./CredentialCreateNestedManyWithoutAppModelsInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { WebhookCreateNestedManyWithoutAppModelsInput } from "./WebhookCreateNestedManyWithoutAppModelsInput";

@InputType()
class AppModelCreateInput {
  @ApiProperty({
    required: false,
    type: () => ApiKeyCreateNestedManyWithoutAppModelsInput,
  })
  @ValidateNested()
  @Type(() => ApiKeyCreateNestedManyWithoutAppModelsInput)
  @IsOptional()
  @Field(() => ApiKeyCreateNestedManyWithoutAppModelsInput, {
    nullable: true,
  })
  apiKey?: ApiKeyCreateNestedManyWithoutAppModelsInput;

  @ApiProperty({
    required: true,
    enum: EnumAppModelCategories,
    isArray: true,
  })
  @IsEnum(EnumAppModelCategories, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumAppModelCategories], {
    nullable: true,
  })
  categories?: Array<
    "calendar" | "messaging" | "other" | "payment" | "video" | "web3"
  >;

  @ApiProperty({
    required: false,
    type: () => CredentialCreateNestedManyWithoutAppModelsInput,
  })
  @ValidateNested()
  @Type(() => CredentialCreateNestedManyWithoutAppModelsInput)
  @IsOptional()
  @Field(() => CredentialCreateNestedManyWithoutAppModelsInput, {
    nullable: true,
  })
  credentials?: CredentialCreateNestedManyWithoutAppModelsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  dirName!: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  keys?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => WebhookCreateNestedManyWithoutAppModelsInput,
  })
  @ValidateNested()
  @Type(() => WebhookCreateNestedManyWithoutAppModelsInput)
  @IsOptional()
  @Field(() => WebhookCreateNestedManyWithoutAppModelsInput, {
    nullable: true,
  })
  webhook?: WebhookCreateNestedManyWithoutAppModelsInput;
}

export { AppModelCreateInput as AppModelCreateInput };
