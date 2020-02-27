import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { from } from 'rxjs';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { createComponent } from '@angular/compiler/src/core';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegistrationComponent } from './components/authentication/registration/registration.component';
import { ForgotpasswordComponent } from './components/authentication/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/authentication/resetpassword/resetpassword.component';
import { UserActivateComponent } from './components/authentication/user-activate/user-activate.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { NotesIconlistComponent } from './components/notes-iconlist/notes-iconlist.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NotesComponent } from './components/notes/notes.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'active/:token', component: UserActivateComponent },
  { path: 'reset-password/:token', component: ResetpasswordComponent },

  {
    // path: 'dashboard/:token', component: DashboardComponent,
    path: 'dashboard', component: DashboardComponent,
    children: [{
      path: 'toolbar',
      component: ToolbarComponent

    },
    
    {
      path: 'sidenave',
      component: SidenavbarComponent
    },
    {
      path: 'notes',
      component: NotesComponent,
      children: [
        {
          path: '',
          component: CreateNotesComponent
        },
        {
          path: '',
          component: DisplayNotesComponent,
        },
       
         {
          path: 'iconlist',
          component: NotesIconlistComponent
        },
      ]
    },
    {
      path: 'display', component: DisplayNotesComponent,
    },
    
    {
      path: 'createnote',
      component: CreateNotesComponent
    }
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
