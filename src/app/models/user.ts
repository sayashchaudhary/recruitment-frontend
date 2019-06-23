export interface User {
  _id?: string;
  name: string;
  email: string;
  student_no: number;
  roll_no: number;
  phone: number;
  branch: Branch;
}

export enum Branch {
  CSE = 'CSE',
  IT = 'IT'
}

