import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubmissionsServiceBase } from "./base/submissions.service.base";

@Injectable()
export class SubmissionsService extends SubmissionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
