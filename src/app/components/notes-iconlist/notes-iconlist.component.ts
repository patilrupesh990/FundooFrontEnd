import { Component, OnInit, Input } from '@angular/core';
import { MatTooltip, MatSnackBar } from '@angular/material';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-notes-iconlist',
  templateUrl: './notes-iconlist.component.html',
  styleUrls: ['./notes-iconlist.component.scss']
})
export class NotesIconlistComponent implements OnInit {
  @Input() note :Note;
  noteId:number;
  isArchive:boolean=false;
  constructor(private noteService: NoteserviceService, private snackBar: MatSnackBar) {
   }
  ngOnInit() {
   
  }

  onClickDelete() {
    this.noteId=this.note.id;
    this.noteService.trashNote(this.note.id).subscribe((response) => {
      this.snackBar.open("Note unpinned and trashed", 'ok', { duration: 5000 });
    },
      error => {
        this.snackBar.open("error in Note Deletion", 'ok', { duration: 5000 });

      }

    );
  }

  onClickArchive() {
    this.noteService.moveToArchiveNote(this.note.id).subscribe((response) => {
      this.snackBar.open("Note unpinned and Archived", "OK", { duration: 5000 });
    },
      error => {
        this.snackBar.open("error in Note thrash operation", "OK", { duration: 5000 });
      });
  }

  onClickColorPlate(){


  }

}
