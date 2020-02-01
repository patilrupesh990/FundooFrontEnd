import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserActivateComponent } from './user-activate/user-activate.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'active/:token',component:UserActivateComponent},
  {path:'reset-password/:token',component:ResetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegistrationComponent,LoginComponent,UserActivateComponent,ForgotpasswordComponent]
