import { ClassStudentsWhereInput } from "./ClassStudentsWhereInput";
import { ClassStudentsOrderByInput } from "./ClassStudentsOrderByInput";

export type ClassStudentsFindManyArgs = {
  where?: ClassStudentsWhereInput;
  orderBy?: Array<ClassStudentsOrderByInput>;
  skip?: number;
  take?: number;
};
