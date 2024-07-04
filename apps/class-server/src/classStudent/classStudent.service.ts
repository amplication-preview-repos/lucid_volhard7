import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClassStudentServiceBase } from "./base/classStudent.service.base";

@Injectable()
export class ClassStudentService extends ClassStudentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
