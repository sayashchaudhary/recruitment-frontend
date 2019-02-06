import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // User will be directed to this component if he is already logged in
    // i.e. if local storage has token
    // call an api to fetch the data of current user
    // In html you can show something like splaash screen
  }

}
