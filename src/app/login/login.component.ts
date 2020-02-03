import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/User.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/userservice.service';
import { FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: UserModel = new UserModel();
  showSpinner:boolean=false;
  loginForm: FormGroup;
  hide = true;
  constructor(private formBuilder: FormBuilder, private userservice: UserService,private spinner: NgxSpinnerService,private matSnackBar:MatSnackBar) { }
 
 
  onloginSubmit() {
    this.showSpinner=true;
    console.log("---------------------------------------");
    this.userservice.loginUser(this.loginForm.value).subscribe((user) => {
      console.log(user);
      this.matSnackBar.open('Successfully Loged In Wellcome','ok',{duration:4000});
    },
      (error: any) => {
        console.log(error)
        this.matSnackBar.open('Invalid User Name Or Password','ok',{duration:5000});
      });
      this.showSpinner=false;
    // alert(this.user.firstName + ' ' + this.user.email + ' ' + this.user.password);
  }

  ngOnInit() {
    console.log("ngoninit---------------------------------------");
    this.spinner.show();
    this.loginForm = this.formBuilder.group({
      'email': [this.user.email, [Validators.required]],
      'password': [this.user.password, [Validators.required]],
    });
  }

}
