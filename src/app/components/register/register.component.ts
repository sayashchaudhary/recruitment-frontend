import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationUtils } from '../../utils/validations';
import { AppMiddleware } from '../../middlewares/app';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  branches = ['CSE', 'IT'];
  address = ['Hostler', 'Day Scholar'];
  loading = false;

  constructor(private router: Router, private appMiddleware: AppMiddleware) {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      studentNumber: new FormControl(null, [Validators.required, ValidationUtils.validateStudentNo.bind(this)]),
      rollNumber: new FormControl(null, [Validators.required, ValidationUtils.validateField.bind(this)]),
      mobileNumber: new FormControl(null, [Validators.required, ValidationUtils.validateField.bind(this)]),
      residence: new FormControl(null, [Validators.required]),
      branch: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {
    this.appMiddleware.getIsLoading().subscribe(loading => this.loading = loading);
  }

  submit() {
    this.appMiddleware.register(this.form.value);
  }

}
