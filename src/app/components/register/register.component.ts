import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationUtils } from '../../utils/validations';
import { AppMiddleware } from '../../middlewares/app';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  branches = ['CSE', 'IT'];
  loading = false;

  constructor(private router: Router, private appMiddleware: AppMiddleware, private http: HttpClient) {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      student_number: new FormControl(null, [Validators.required, ValidationUtils.validateStudentNo.bind(this)]),
      roll_number: new FormControl(null, [Validators.required, ValidationUtils.validateField.bind(this)]),
      phone: new FormControl(null, [Validators.required, ValidationUtils.validatePhoneNo.bind(this)]),
      password: new FormControl(null, [Validators.required, ValidationUtils.validatePassword.bind(this)]),
      branch: new FormControl(null, [Validators.required]),
      // recaptcha: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {
    this.appMiddleware.getIsLoading().subscribe(loading => this.loading = loading);
  }

  submit() {
    // console.log(this.form.value);
    this.appMiddleware.register(this.form.value);
  }

  // handleReset() {
  //   console.log('Reset');
  // }
  //
  // handleExpire() {
  //   console.log('Expire');
  // }
  //
  // handleLoad() {
  //   console.log('Load');
  // }
  //
  // handleSuccess(event) {
  //   console.log('Success', event);
  // }
}
