import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { Router, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss'],

})
export class CreateNotesComponent implements OnInit {
  note: Note = new Note();
  open: boolean = false;
  token: string = sessionStorage.getItem('token');

  constructor(private formBuilder: FormBuilder, private matSnackBar: MatSnackBar, private router: Router, private noteService: NoteserviceService) { }

  ngOnInit() {

  }
  onClickCreateNoteOpen() {
    this.open = !this.open;
  }


  onSubmit() {
    if (this.note.title) {
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
