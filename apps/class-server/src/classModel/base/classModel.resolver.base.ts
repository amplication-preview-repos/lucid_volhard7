/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ClassModel } from "./ClassModel";
import { ClassModelCountArgs } from "./ClassModelCountArgs";
import { ClassModelFindManyArgs } from "./ClassModelFindManyArgs";
import { ClassModelFindUniqueArgs } from "./ClassModelFindUniqueArgs";
import { DeleteClassModelArgs } from "./DeleteClassModelArgs";
import { CreateClassDto } from "../CreateClassDto";
import { ClassModelService } from "../classModel.service";
@graphql.Resolver(() => ClassModel)
export class ClassModelResolverBase {
  constructor(protected readonly service: ClassModelService) {}

  async _classModelsMeta(
    @graphql.Args() args: ClassModelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ClassModel])
  async classModels(
    @graphql.Args() args: ClassModelFindManyArgs
  ): Promise<ClassModel[]> {
    return this.service.classModels(args);
  }

  @graphql.Query(() => ClassModel, { nullable: true })
  async classModel(
    @graphql.Args() args: ClassModelFindUniqueArgs
  ): Promise<ClassModel | null> {
    const result = await this.service.classModel(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ClassModel)
  async deleteClassModel(
    @graphql.Args() args: DeleteClassModelArgs
  ): Promise<ClassModel | null> {
    try {
      return await this.service.deleteClassModel(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CreateClassDto)
  async CreateClass(
    @graphql.Args()
    args: CreateClassDto
  ): Promise<CreateClassDto> {
    return this.service.CreateClass(args);
  }

  @graphql.Query(() => [CreateClassDto])
  async GetAllClasses(
    @graphql.Args()
    args: string
  ): Promise<CreateClassDto[]> {
    return this.service.GetAllClasses(args);
  }
}
