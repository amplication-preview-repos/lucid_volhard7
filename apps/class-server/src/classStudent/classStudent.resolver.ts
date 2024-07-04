import * as graphql from "@nestjs/graphql";
import { ClassStudentResolverBase } from "./base/classStudent.resolver.base";
import { ClassStudent } from "./base/ClassStudent";
import { ClassStudentService } from "./classStudent.service";

@graphql.Resolver(() => ClassStudent)
export class ClassStudentResolver extends ClassStudentResolverBase {
  constructor(protected readonly service: ClassStudentService) {
    super(service);
  }
}
