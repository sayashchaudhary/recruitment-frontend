import { AbstractControl } from '@angular/forms';

export class ValidationUtils {

  public static validateStudentNo(control: AbstractControl): { [key: string]: boolean } | null {
    const studentNo = control.value;
    if (!studentNo || studentNo.toString().length !== 7) {
      return { studentNumber: true };
    } else {
      return null;
    }
  }
  public static validateFieldNo(control: AbstractControl): { [key: string]: boolean } | null {
      const fieldNo = control.value;
      if (!fieldNo || fieldNo.toString().length !== 10) {
        return { fieldNumber: true };
      } else {
        return null;
      }
  }}
