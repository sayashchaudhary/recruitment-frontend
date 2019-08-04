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

  public static validateField(control: AbstractControl): { [key: string]: boolean } | null {
    const fieldValue = control.value;
    if (!fieldValue || fieldValue.toString().length !== 10) {
      return { fieldNumber: true };
    } else {
      return null;
    }
  }

  public static validatePassword(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;
    if(!password || password.toString().length !==7) {
      return { password: true };
    } else {
      return null;
    }
  }
}

