import { Lesson as TLesson } from "../api/lesson/Lesson";

export const LESSON_TITLE_FIELD = "id";

export const LessonTitle = (record: TLesson): string => {
  return record.id?.toString() || String(record.id);
};
