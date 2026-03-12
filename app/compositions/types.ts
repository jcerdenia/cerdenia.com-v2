export interface Work {
  key: string;
  title: string;
  subtitle?: string;
  instrumentation?: string;
  description?: string;
  category: string;
  year: number;
  scoreUrl?: string;
  content?: string;
  hidden?: boolean;
}
