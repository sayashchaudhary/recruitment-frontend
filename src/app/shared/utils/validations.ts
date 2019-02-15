import { AbstractControl } from '@angular/forms';

export class ValidationUtils {

  public static validateStudentNo(control: AbstractControl): { [key: string]: boolean } | null {
    const studentNo = control.value.toString();
    if (!studentNo || studentNo.length !== 7) {
      return { studentNumber: true };
    } else {
      return null;
    }
  }
}
