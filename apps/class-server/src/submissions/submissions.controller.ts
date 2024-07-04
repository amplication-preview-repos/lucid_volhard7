import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubmissionsService } from "./submissions.service";
import { SubmissionsControllerBase } from "./base/submissions.controller.base";

@swagger.ApiTags("submissions")
@common.Controller("submissions")
export class SubmissionsController extends SubmissionsControllerBase {
  constructor(protected readonly service: SubmissionsService) {
    super(service);
  }
}
