export interface AssessmentItem {
  id: string;
  title: string;
  description: string;
  status: "compliant" | "rework-needed" | "pending";
}

export interface AssessmentSection {
  id: string;
  title: string;
  items: AssessmentItem[];
} 