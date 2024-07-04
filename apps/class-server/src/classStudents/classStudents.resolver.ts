import * as graphql from "@nestjs/graphql";
import { ClassStudentsResolverBase } from "./base/classStudents.resolver.base";
import { ClassStudents } from "./base/ClassStudents";
import { ClassStudentsService } from "./classStudents.service";

@graphql.Resolver(() => ClassStudents)
export class ClassStudentsResolver extends ClassStudentsResolverBase {
  constructor(protected readonly service: ClassStudentsService) {
    super(service);
  }
}
