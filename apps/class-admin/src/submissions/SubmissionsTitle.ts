import { Submissions as TSubmissions } from "../api/submissions/Submissions";

export const SUBMISSIONS_TITLE_FIELD = "id";

export const SubmissionsTitle = (record: TSubmissions): string => {
  return record.id?.toString() || String(record.id);
};
