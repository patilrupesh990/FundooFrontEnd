import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/app/model/note.model';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss'],

})
export class CreateNotesComponent implements OnInit {
  // note: Note = new Note();
  note:Note=new Note();
  open: boolean = false;
  token: string = sessionStorage.getItem('token');
  isPinned:boolean;

  constructor(private formBuilder: FormBuilder, private matSnackBar: MatSnackBar, private router: Router, private noteService: NoteserviceService) { }

  ngOnInit() {
  }
  onClickCreateNoteOpen() {
    this.open = !this.open;
  }
  onPin(){
      this.note.isPin=this.isPinned;
  }

  onSubmit() {
    console.log("on submit called"+this.note.title);
    this.note.isPin=this.isPinned;
    if (this.note.title) {
      console.log("inside if called");
      this.noteService.createNote(this.note, this.token).subscribe(response => {
        this.note = new Note();
        console.log(this.note);
        this.matSnackBar.open('note created', 'ok', { duration: 5000 });
      },
        (error: any) => {
          console.log(error)
          this.matSnackBar.open('error in note creation', 'ok', { duration: 5000 });
        }
      );
    }
  }
}
