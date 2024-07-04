/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ClassStudentsService } from "../classStudents.service";
import { ClassStudentsCreateInput } from "./ClassStudentsCreateInput";
import { ClassStudents } from "./ClassStudents";
import { ClassStudentsFindManyArgs } from "./ClassStudentsFindManyArgs";
import { ClassStudentsWhereUniqueInput } from "./ClassStudentsWhereUniqueInput";
import { ClassStudentsUpdateInput } from "./ClassStudentsUpdateInput";
import { CreateClassStudentsDto } from "../CreateClassStudentsDto";

export class ClassStudentsControllerBase {
  constructor(protected readonly service: ClassStudentsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ClassStudents })
  async createClassStudents(
    @common.Body() data: ClassStudentsCreateInput
  ): Promise<ClassStudents> {
    return await this.service.createClassStudents({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ClassStudents] })
  @ApiNestedQuery(ClassStudentsFindManyArgs)
  async classStudentsItems(
    @common.Req() request: Request
  ): Promise<ClassStudents[]> {
    const args = plainToClass(ClassStudentsFindManyArgs, request.query);
    return this.service.classStudentsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ClassStudents })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async classStudents(
    @common.Param() params: ClassStudentsWhereUniqueInput
  ): Promise<ClassStudents | null> {
    const result = await this.service.classStudents({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ClassStudents })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateClassStudents(
    @common.Param() params: ClassStudentsWhereUniqueInput,
    @common.Body() data: ClassStudentsUpdateInput
  ): Promise<ClassStudents | null> {
    try {
      return await this.service.updateClassStudents({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ClassStudents })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteClassStudents(
    @common.Param() params: ClassStudentsWhereUniqueInput
  ): Promise<ClassStudents | null> {
    try {
      return await this.service.deleteClassStudents({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Post("/create-class-student")
  @swagger.ApiOkResponse({
    type: CreateClassStudentsDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CreateClassStudent(
    @common.Body()
    body: string
  ): Promise<CreateClassStudentsDto> {
    return this.service.CreateClassStudent(body);
  }

  @common.Get("/get-class-students")
  @swagger.ApiOkResponse({
    type: CreateClassStudentsDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetClassStudents(
    @common.Body()
    body: string
  ): Promise<CreateClassStudentsDto[]> {
    return this.service.GetClassStudents(body);
  }
}