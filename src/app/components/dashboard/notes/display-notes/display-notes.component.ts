import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { Router, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})

export class DisplayNotesComponent implements OnInit {
  notes : any;
  getAllNotes: [];

  constructor(private formBuilder: FormBuilder, private matSnackBar: MatSnackBar, private router: Router, private noteService: NoteserviceService, private httpClient: HttpClient) { }

  ngOnInit() {
    console.log("ng on init display notes");
    let note=this.noteService.getAllNotes();
    note.subscribe(
      (data)=>{
        this.notes=Object.assign([], data);
        console.log(""+this.notes.title);
      },
      (error: any) => {
            console.log(error)
            this.matSnackBar.open('error in note display', 'ok', { duration: 5000 });
          }
      );
    

   
  }
}
