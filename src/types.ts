export interface QuestionOption {
  label: string;
  value: string;
}
export interface Question {
  text: string;
  options: Array<QuestionOption>;
}
export interface Breed {
  name: string;
  traits: string[];
  image: string;
  description: string;
  matchCount?: number; // Optional for sorting
}
