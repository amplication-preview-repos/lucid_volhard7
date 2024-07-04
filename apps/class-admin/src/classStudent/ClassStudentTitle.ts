import { ClassStudent as TClassStudent } from "../api/classStudent/ClassStudent";

export const CLASSSTUDENT_TITLE_FIELD = "id";

export const ClassStudentTitle = (record: TClassStudent): string => {
  return record.id?.toString() || String(record.id);
};
