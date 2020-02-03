import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/User.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/userservice.service';
import { FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router,ParamMap} from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  user: UserModel = new UserModel();
  resetpasswordForm: FormGroup;
  token:string;
  showSpinner:boolean=false;
  hide = true;
  constructor(private formBuilder: FormBuilder, private userservice: UserService,private matSnackBar:MatSnackBar,private route: ActivatedRoute,private route2:Router,private spinner: NgxSpinnerService) { }
 
  
  onSubmit() {
    console.log("---------------------------------------");
    showSpinner:true;
    this.token=this.route.snapshot.paramMap.get("token");
    this.userservice.resetPassword(this.resetpasswordForm.value,this.token).subscribe((user) => {
      console.log(user);
      this.route2.navigate(['/login']);
      this.matSnackBar.open('Your New Password Updated','ok',{duration:4000});
    },
      (error: any) => {
        console.log(error)
        this.matSnackBar.open('Bad Crediatial Please try again.','ok',{duration:5000});
      });
    // alert(this.user.firstName + ' ' + this.user.email + ' ' + this.user.password);
  }
  
  ngOnInit() {
    this.spinner.show();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.token = params.get('token');
    
    }),
    this.resetpasswordForm = this.formBuilder.group({
      'password': [this.user.password, [Validators.required]],
    });
}
}
