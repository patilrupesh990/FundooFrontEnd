import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from "ngx-spinner";
import { UserModel } from 'src/app/model/User.model';
import { UserService } from 'src/app/services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: UserModel = new UserModel();
  showSpinner: boolean = false;
  loginForm: FormGroup;
  hide = true;
  constructor(private formBuilder: FormBuilder, private router: Router, private userservice: UserService, private spinner: NgxSpinnerService, private matSnackBar: MatSnackBar) { }

  onloginSubmit() {
    this.showSpinner = true;
    console.log("---------------------------------------");

    this.userservice.loginUser(this.loginForm.value).subscribe(response => {
      console.log(response);
      this.matSnackBar.open('Successfully Loged In Wellcome', 'ok', { duration: 5000 });

      sessionStorage.setItem("token", response.token);
    
      sessionStorage.setItem("response",response.response);
      sessionStorage.setItem("uname",response.userName);
      this.router.navigate(['dashboard/notes']);
      this.showSpinner = false;   
    },
      (error: any) => {
        this.showSpinner = false;
        console.log(error.error.token);
        this.matSnackBar.open(error.error.token, 'ok', { duration: 3000 });
      });
    // alert(this.user.firstName + ' ' + this.user.email + ' ' + this.user.password);
  }

  ngOnInit() {
    console.log("ngoninit---------------------------------------");
    this.spinner.show();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9.%-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required]],
    });
  }

  get f() { return this.loginForm.controls; }
}
