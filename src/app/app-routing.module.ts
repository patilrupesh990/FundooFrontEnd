import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ToolbaarComponent } from './components/toolbaar/toolbaar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { from } from 'rxjs';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { UserActivateComponent } from './components/user-activate/user-activate.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SidenavbarComponent } from './components/dashboard/sidenavbar/sidenavbar.component';

const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'active/:token',component:UserActivateComponent},
  {path:'reset-password/:token',component:ResetpasswordComponent},
  {path:'toolbar',component:ToolbaarComponent},
  {
    path:'dashboard',component:DashboardComponent,
    children:[{
        path:'toolbar',
        component:ToolbaarComponent

    },
    {
      path:'sidenave',
      component:SidenavbarComponent
    }] 
},
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegistrationComponent,LoginComponent,UserActivateComponent,ForgotpasswordComponent,DashboardComponent,ResetpasswordComponent,ToolbaarComponent]
