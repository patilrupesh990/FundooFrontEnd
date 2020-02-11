import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router,ParamMap} from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";
import { UserModel } from 'src/app/model/User.model';
import { UserService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
 
  user: UserModel = new UserModel();
  forgotpasswordForm: FormGroup;
  token:string;
  showSpinner:boolean=false;
  constructor(private formBuilder: FormBuilder, private router: Router,private userservice: UserService,private matSnackBar:MatSnackBar,private route2:Router,private spinner: NgxSpinnerService) { }

 
  onSubmit() {
    this.showSpinner = true;

    console.log("---------------------------------------");    
    this.userservice.forgotPasswordVerifyMail(this.forgotpasswordForm.value).subscribe((user) => {
      console.log(user);
      this.router.navigate(['/login']);
      this.matSnackBar.open('Reset Password Link Sent to Your Mail!!','ok',{duration:5000});
      this.showSpinner=false;
    },
      (error: any) => {
        console.log(error)
        this.matSnackBar.open('Invalid Email','ok',{duration:4000});
        this.showSpinner=false;
      });

    // alert(this.user.firstName + ' ' + this.user.email + ' ' + this.user.password);
  }

  ngOnInit() {
     this.spinner.show();
      this.forgotpasswordForm = this.formBuilder.group({
      'email': [this.user.email, [Validators.required]]
  });

}
}
