import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: FormGroup;
  branches = ['CSE', 'IT'];
  address = ['Hostler', 'Day Scholar'];

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      studentNumber: new FormControl(null, [Validators.required]),
      rollNumber: new FormControl(null, [Validators.required]),
      mobileNumber: new FormControl(null, [Validators.required]),
      hostler: new FormControl(null, [Validators.required]),
      branch: new FormControl(null, [Validators.required]),
    });
  }

  submit() {
    console.log(this.form.value);
  }

}
