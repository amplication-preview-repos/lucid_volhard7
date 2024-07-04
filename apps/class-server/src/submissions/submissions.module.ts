import { Module } from "@nestjs/common";
import { SubmissionsModuleBase } from "./base/submissions.module.base";
import { SubmissionsService } from "./submissions.service";
import { SubmissionsController } from "./submissions.controller";
import { SubmissionsResolver } from "./submissions.resolver";

@Module({
  imports: [SubmissionsModuleBase],
  controllers: [SubmissionsController],
  providers: [SubmissionsService, SubmissionsResolver],
  exports: [SubmissionsService],
})
export class SubmissionsModule {}
