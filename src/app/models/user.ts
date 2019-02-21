export interface User {
  name: string;
  email: string;
  studentNo: string;
  rollNo: string;
  mobileNo: string;
  branch: Branch;
  hostlerDayscholar: HostlerDayScholar;
}

export enum Branch {
  CSE = 'cse',
  IT = 'it'
}

export enum HostlerDayScholar {
  HOSTLER = 'hostler',
  DAYSCHOLAR = 'day scholar'
}
