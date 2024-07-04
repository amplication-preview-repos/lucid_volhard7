import { ClassStudentWhereInput } from "./ClassStudentWhereInput";
import { ClassStudentOrderByInput } from "./ClassStudentOrderByInput";

export type ClassStudentFindManyArgs = {
  where?: ClassStudentWhereInput;
  orderBy?: Array<ClassStudentOrderByInput>;
  skip?: number;
  take?: number;
};
