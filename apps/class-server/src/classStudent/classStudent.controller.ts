import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClassStudentService } from "./classStudent.service";
import { ClassStudentControllerBase } from "./base/classStudent.controller.base";

@swagger.ApiTags("classStudents")
@common.Controller("classStudents")
export class ClassStudentController extends ClassStudentControllerBase {
  constructor(protected readonly service: ClassStudentService) {
    super(service);
  }
}
