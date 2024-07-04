import { Module } from "@nestjs/common";
import { ClassStudentsModuleBase } from "./base/classStudents.module.base";
import { ClassStudentsService } from "./classStudents.service";
import { ClassStudentsController } from "./classStudents.controller";
import { ClassStudentsResolver } from "./classStudents.resolver";

@Module({
  imports: [ClassStudentsModuleBase],
  controllers: [ClassStudentsController],
  providers: [ClassStudentsService, ClassStudentsResolver],
  exports: [ClassStudentsService],
})
export class ClassStudentsModule {}
