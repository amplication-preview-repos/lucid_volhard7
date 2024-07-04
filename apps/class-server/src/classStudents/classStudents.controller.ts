import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClassStudentsService } from "./classStudents.service";
import { ClassStudentsControllerBase } from "./base/classStudents.controller.base";

@swagger.ApiTags("classStudents")
@common.Controller("classStudents")
export class ClassStudentsController extends ClassStudentsControllerBase {
  constructor(protected readonly service: ClassStudentsService) {
    super(service);
  }
}
