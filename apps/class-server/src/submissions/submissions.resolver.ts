import * as graphql from "@nestjs/graphql";
import { SubmissionsResolverBase } from "./base/submissions.resolver.base";
import { Submissions } from "./base/Submissions";
import { SubmissionsService } from "./submissions.service";

@graphql.Resolver(() => Submissions)
export class SubmissionsResolver extends SubmissionsResolverBase {
  constructor(protected readonly service: SubmissionsService) {
    super(service);
  }
}
