import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatIconModule,
  MatButtonModule, MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSidenavModule  
} from "@angular/material";
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UserService} from './services/userservice.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule, MatDialog } from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { NgxSpinnerModule } from "ngx-spinner";
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgotpasswordComponent } from './components/authentication/forgotpassword/forgotpassword.component';
import { UserActivateComponent } from './components/authentication/user-activate/user-activate.component';
import { ResetpasswordComponent } from './components/authentication/resetpassword/resetpassword.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToolbarComponent } from './components/dashboard/toolbar/toolbar.component';
import { SidenavbarComponent } from './components/dashboard/sidenavbar/sidenavbar.component';
import { SideNavService } from './services/sidenavservice.service';
import { NotesIconlistComponent } from './components/dashboard/notes/notes-iconlist/notes-iconlist.component';
import { CreateNotesComponent } from './components/dashboard/notes/create-notes/create-notes.component';
import { PinNotesComponent } from './components/dashboard/notes/pin-notes/pin-notes.component';
import { DisplayNotesComponent } from './components/dashboard/notes/display-notes/display-notes.component';
import { NotesComponent } from './components/dashboard/notes/notes.component';
import {  MatTooltipModule} from '@angular/material/tooltip';
import { MatMenuModule} from '@angular/material/menu';
import { UpdatenotesComponent } from './components/dashboard/notes/updatenotes/updatenotes.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserActivateComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    PageNotFoundComponent,
    DashboardComponent,
    ToolbarComponent,
    SidenavbarComponent,
    CreateNotesComponent,
    PinNotesComponent,
    DisplayNotesComponent,
    NotesIconlistComponent,
    NotesComponent,
    UpdatenotesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCardModule,
    MatSnackBarModule,MatDialogModule,
    MatSidenavModule,
    MatListModule,
    NgxSpinnerModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatMenuModule,
    ],
    entryComponents:[
      UpdatenotesComponent
    ],
  providers: [SideNavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
