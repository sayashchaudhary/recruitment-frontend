import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ValidationUtils } from '../../shared/utils/validations';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  branches = ['CSE', 'IT'];
  address = ['Hostler', 'Day Scholar'];

  constructor(private http: HttpClient, private router: Router) {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      studentNumber: new FormControl(null, [Validators.required, ValidationUtils.validateStudentNo.bind(this)]),
      rollNumber: new FormControl(null, [Validators.required, ValidationUtils.validateField.bind(this)]),
      mobileNumber: new FormControl(null, [Validators.required, ValidationUtils.validateField.bind(this)]),
      hostler: new FormControl(null, [Validators.required]),
      branch: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {
    // this.http.post('https://skeptics-backend.herokuapp.com/Register', {
    //   name: 'sdhfdsjf',
    //   email: 'dksnfl@gmail.com',
    //   Mob: '9090909090',
    //   password: '12345678'
    // }).subscribe((res) => console.log('got the response', res));
  }

  submit() {
    this.router.navigate(['/instruction']);
  }

}
