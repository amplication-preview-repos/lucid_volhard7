/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ClassStudent as PrismaClassStudent } from "@prisma/client";

export class ClassStudentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ClassStudentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.classStudent.count(args);
  }

  async classStudents(
    args: Prisma.ClassStudentFindManyArgs
  ): Promise<PrismaClassStudent[]> {
    return this.prisma.classStudent.findMany(args);
  }
  async classStudent(
    args: Prisma.ClassStudentFindUniqueArgs
  ): Promise<PrismaClassStudent | null> {
    return this.prisma.classStudent.findUnique(args);
  }
  async createClassStudent(
    args: Prisma.ClassStudentCreateArgs
  ): Promise<PrismaClassStudent> {
    return this.prisma.classStudent.create(args);
  }
  async updateClassStudent(
    args: Prisma.ClassStudentUpdateArgs
  ): Promise<PrismaClassStudent> {
    return this.prisma.classStudent.update(args);
  }
  async deleteClassStudent(
    args: Prisma.ClassStudentDeleteArgs
  ): Promise<PrismaClassStudent> {
    return this.prisma.classStudent.delete(args);
  }
}
