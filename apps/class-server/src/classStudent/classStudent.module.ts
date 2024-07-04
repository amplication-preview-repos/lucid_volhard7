import { Module } from "@nestjs/common";
import { ClassStudentModuleBase } from "./base/classStudent.module.base";
import { ClassStudentService } from "./classStudent.service";
import { ClassStudentController } from "./classStudent.controller";
import { ClassStudentResolver } from "./classStudent.resolver";

@Module({
  imports: [ClassStudentModuleBase],
  controllers: [ClassStudentController],
  providers: [ClassStudentService, ClassStudentResolver],
  exports: [ClassStudentService],
})
export class ClassStudentModule {}
