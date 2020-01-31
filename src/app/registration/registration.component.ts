import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/User.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/userservice.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: UserModel = new UserModel();
  registerForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private userservice: UserService) { }
  onRegisterSubmit() {
    console.log("---------------------------------------");
    this.userservice.registerUser(this.registerForm.value).subscribe((user) => {
      console.log(user);
    },
      (error: any) => {
        console.log(error)
      });
    // alert(this.user.firstName + ' ' + this.user.email + ' ' + this.user.password);
  }
  ngOnInit() {
    console.log("ngoninit---------------------------------------");

    this.registerForm = this.formBuilder.group({
      'firstname': [this.user.firstname, [Validators.required]],
      'lastname': [this.user.lastname],
      'email': [this.user.email, [Validators.required]],
      'password': [this.user.password, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      'phNo': [this.user.phNo, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      'userName': [this.user.userName, [Validators.required]],
      'gender': [this.user.gender, [Validators.required]],
      'dateOfBirth': [this.user.dateOfBirth]
    });
  }
}
