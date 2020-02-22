import { Component, OnInit, OnChanges,Input} from '@angular/core';
import { Router, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/app/model/note.model';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { HttpService } from 'src/app/services/httpservice.service';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { DashboardComponent } from '../../dashboard.component';
@Component({
  selector: 'app-pin-notes',
  templateUrl: './pin-notes.component.html',
  styleUrls: ['./pin-notes.component.scss']
})
export class PinNotesComponent implements OnInit {
  //private note=null;
  @Input() note :Note;
  noteId;
  pinned: boolean;

 

  constructor(private matSnackBar: MatSnackBar, private router: Router, private noteService: NoteserviceService) {
    // this.noteId=noteService.getNoteId();
  }
  ngOnInit() {
    console.log(this.note.isPin);
    this.pinned=this.note.isPin;
  }
  
  onPin() {
    console.log("on pin called");
    // this.noteService.share.subscribe(x => this.noteId = x);
    console.log("noteId---->:" + this.noteId);
    this.noteService.pinNotes(this.note.id).subscribe(response => {
      if (this.pinned) {
        this.pinned=false;
        this.matSnackBar.open('note Pinned', 'ok', { duration: 5000 });
      }
      if (!this.pinned) {
        this.pinned=true;
        this.matSnackBar.open('note UnPinned', 'ok', { duration: 5000 });
      }
    },
      (error: any) => {
        console.log(error)
        this.matSnackBar.open('error in note pinned', 'ok', { duration: 5000 });
      }
    );
  }


}
