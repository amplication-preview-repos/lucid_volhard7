import { SubmissionsWhereInput } from "./SubmissionsWhereInput";
import { SubmissionsOrderByInput } from "./SubmissionsOrderByInput";

export type SubmissionsFindManyArgs = {
  where?: SubmissionsWhereInput;
  orderBy?: Array<SubmissionsOrderByInput>;
  skip?: number;
  take?: number;
};
