import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm : FormGroup
  

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      username : new FormControl(""),
      email : new FormControl("",[Validators.email,Validators.required]),
      password : new FormControl(""),
      confirm_password : new FormControl("")
    })
  }

}
