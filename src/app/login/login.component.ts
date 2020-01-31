import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/User.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/userservice.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: UserModel = new UserModel();
  loginForm: FormGroup;
  hide = true;
  constructor(private formBuilder: FormBuilder, private userservice: UserService) { }
 
 
  onloginSubmit() {
    console.log("---------------------------------------");
    this.userservice.loginUser(this.loginForm.value).subscribe((user) => {
      console.log(user);
    },
      (error: any) => {
        console.log(error)
      });
    // alert(this.user.firstName + ' ' + this.user.email + ' ' + this.user.password);
  }

  ngOnInit() {
    console.log("ngoninit---------------------------------------");

    this.loginForm = this.formBuilder.group({
      'email': [this.user.email, [Validators.required]],
      'password': [this.user.password, [Validators.required]],
    });
  }

}
