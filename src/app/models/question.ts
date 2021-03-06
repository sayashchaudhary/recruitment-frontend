export interface Question {
  _id: string;
  options: string[];
  category: Category;
  question: string;
  question_id: number;
}

export enum Category {
  JAVA = 'java',
  C = 'c',
  HTML_CSS = 'html/css',
  APTITUDE = 'aptitude',
  ALGORITHM = 'algorithm'
}
