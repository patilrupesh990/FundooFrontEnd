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
  ,MatCheckboxModule  
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
import {  MatTooltipModule} from '@angular/material/tooltip';
import { MatMenuModule} from '@angular/material/menu';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { NotesIconlistComponent } from './components/notes-iconlist/notes-iconlist.component';
import { UpdatenotesComponent } from './components/updatenotes/updatenotes.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { SideNavService } from './services/sidenavservice.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { NotesComponent } from './components/notes/notes.component';
import { LabelComponent } from './components/label/label.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';
import { SearchnotePipe } from './pipe/searchnote.pipe';
import { SearchlabelPipe } from './pipe/searchlabel.pipe';
import { EditlabelComponent } from './components/editlabel/editlabel.component';


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
    DisplayNotesComponent,
    NotesIconlistComponent,
    NotesComponent,
    UpdatenotesComponent,
    LabelComponent,
    ColorPickerComponent,
    CollaboratorComponent,
    SearchnotePipe,
    SearchlabelPipe,
    EditlabelComponent,
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
    MatCheckboxModule,
    AmazingTimePickerModule
    ],
    entryComponents:[
      UpdatenotesComponent,
      CollaboratorComponent,
      LabelComponent,
      EditlabelComponent
    ],
  providers: [SideNavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
