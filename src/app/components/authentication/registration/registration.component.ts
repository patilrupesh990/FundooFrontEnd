import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormGroupDirective, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/userservice.service';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { from } from 'rxjs';
import { ErrorStateMatcher } from '@angular/material/core';
import {MatchPassword} from '../../../utility/validation/password-match';
import { UserModel } from 'src/app/model/User.model';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  showSpinner: boolean = false;
  user: UserModel = new UserModel();
  registerForm: FormGroup;
  submitted: boolean = false;
  hide = true;
  hide2=true;
  showMsg: boolean = false;


  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService, private userservice: UserService, private matSnackBar: MatSnackBar, private router: Router) {   }

  onRegisterSubmit() {
    this.showSpinner = true;
    console.log("---------------------------------------");
    this.userservice.registerUser(this.registerForm.value).subscribe((user) => {
      this.router.navigate(['/login']);
      this.showMsg = true;
      this.submitted = true;
      this.matSnackBar.open('Registration Successfull Please Verify Account Before Login', 'ok', { duration: 4000 });
      this.showSpinner = false;
     
    },
      (error: any) => {
        this.showSpinner = false;
        this.matSnackBar.open('Bad Creaditial', 'ok', { duration: 4000 });
        console.log(error)
      });
      if (this.registerForm.invalid) {
        return;
    }
  }
  ngOnInit() {
    console.log("ngoninit---------------------------------------");
    this.spinner.show();
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: [''],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9.%-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      cnfpassword:[ '',[Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      phNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      userName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['',Validators.required]
    },
    {
      validator: MatchPassword('password', 'cnfpassword')
    }
    );
  }
  get f() { return this.registerForm.controls; }

}
