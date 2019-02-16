import { AbstractControl } from '@angular/forms';

export class ValidationUtils {

  public static validateStudentNo(control: AbstractControl): { [key: string]: boolean } | null {
    const studentNo = control.value;
    if (!studentNo || studentNo.toString().length !== 7) {
      return { studentNumber: true };
    } else {
      return null;
    }}
  
  
  public static validateRollNo(control: AbstractControl): { [key: string]: boolean } | null {
    const rollNo = control.value;
    if (!rollNo || rollNo.toString().length !== 10) {
      return { rollNumber: true };
    } else {
      return null;
    }
  }
  public static validateMobileNo(control: AbstractControl): { [key: string]: boolean } | null {
      const mobileNo = control.value;
      if (!mobileNo || mobileNo.toString().length !== 10) {
        return { mobileNumber: true };
      } else {
        return null;
      }
  }}
