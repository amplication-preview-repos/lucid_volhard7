import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClassStudentsServiceBase } from "./base/classStudents.service.base";

@Injectable()
export class ClassStudentsService extends ClassStudentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
