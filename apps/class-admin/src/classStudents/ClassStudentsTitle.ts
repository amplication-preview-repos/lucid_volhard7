import { ClassStudents as TClassStudents } from "../api/classStudents/ClassStudents";

export const CLASSSTUDENTS_TITLE_FIELD = "id";

export const ClassStudentsTitle = (record: TClassStudents): string => {
  return record.id?.toString() || String(record.id);
};
