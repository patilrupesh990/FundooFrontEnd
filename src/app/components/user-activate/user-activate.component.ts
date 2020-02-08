import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/userservice.service';
import { FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from "@angular/router";
import {Router,ParamMap} from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";
import { UserModel } from 'src/app/model/User.model';

@Component({
  selector: 'app-user-activate',
  templateUrl: './user-activate.component.html',
  styleUrls: ['./user-activate.component.scss']
})
export class UserActivateComponent implements OnInit {
  user: UserModel = new UserModel();
  activeForm: FormGroup;
  token:string;
  showSpinner:boolean=false;
  constructor(private formBuilder: FormBuilder, private userservice: UserService,private matSnackBar:MatSnackBar,private route: ActivatedRoute,private route2:Router,private spinner: NgxSpinnerService) { }
  
  onActiveSubmit() {
    console.log("---------------------------------------");
    this.showSpinner=true;
    this.token=this.route.snapshot.paramMap.get("token");
    this.userservice.activateUser(this.activeForm,this.token).subscribe((user) => {
      this.route2.navigate(['/login']);
      this.matSnackBar.open('Your Account Verified SuccessFully','ok',{duration:4000});
    },
      (error: any) => {
        this.matSnackBar.open('Bad Creaditial','ok',{duration:4000});
        console.log(error)
      });
    // alert(this.user.firstName + ' ' + this.user.email + ' ' + this.user.password);
  }
  ngOnInit() {
    this.spinner.show();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.token = params.get('token');
    });

  }
}
