import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  form: FormGroup;
  branches = ['CSE', 'IT'];
  address = ['Hostler', 'Day Scholar'];

  constructor(private http: HttpClient,private router:Router) {
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

  ngOnInit(){
     let obs = this.http.post('https://skeptics-backend.herokuapp.com/Register',{name: 'sdhfdsjf',
       email: 'dksnfl@gmail.com',
       Mob: '9090909090',
       password: '12345678'});
     obs.subscribe((res) => console.log('got the response',res));
  }

  submit() {
    this.router.navigate(['/instruction']);
  }

}
