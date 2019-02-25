export interface User {
  name: string;
  email: string;
  studentNo: number;
  rollNo: number;
  mobileNo: number;
  branch: Branch;
  residence: HostlerDayScholar;
}

export enum Branch {
  CSE = 'cse',
  IT = 'it'
}

export enum HostlerDayScholar {
  HOSTLER = 'hostler',
  DAYSCHOLAR = 'day scholar'
}
