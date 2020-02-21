import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { from } from 'rxjs';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SidenavbarComponent } from './components/dashboard/sidenavbar/sidenavbar.component';
import { ToolbarComponent } from './components/dashboard/toolbar/toolbar.component';
import { createComponent } from '@angular/compiler/src/core';
import { CreateNotesComponent } from './components/dashboard/notes/create-notes/create-notes.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegistrationComponent } from './components/authentication/registration/registration.component';
import { ForgotpasswordComponent } from './components/authentication/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/authentication/resetpassword/resetpassword.component';
import { UserActivateComponent } from './components/authentication/user-activate/user-activate.component';
import { NotesIconlistComponent } from './components/dashboard/notes/notes-iconlist/notes-iconlist.component';
import { DisplayNotesComponent } from './components/dashboard/notes/display-notes/display-notes.component';
import { NotesComponent } from './components/dashboard/notes/notes.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'active/:token', component: UserActivateComponent },
  { path: 'reset-password/:token', component: ResetpasswordComponent },

  {
    path: 'dashboard/:token', component: DashboardComponent,
    children: [{
      path: 'toolbar',
      component: ToolbarComponent

    },
    {
      path: 'sidenave',
      component: SidenavbarComponent
    },
    {
      path: '',
      component: NotesComponent,
      children: [
       {
         path:'',
         component:CreateNotesComponent
       } ,
       {
        path:'',
        component:DisplayNotesComponent
       }
        ,{
        path: 'iconlist',
        component: NotesIconlistComponent
      }
    ]
    },

    {
      path: ':token/display', component: DisplayNotesComponent
    },
    ]
  },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistrationComponent, LoginComponent, UserActivateComponent, ForgotpasswordComponent, DashboardComponent, ResetpasswordComponent, ToolbarComponent]
