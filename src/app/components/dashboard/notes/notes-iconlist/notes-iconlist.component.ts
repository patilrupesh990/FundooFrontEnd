import { Component, OnInit, Input } from '@angular/core';
import { MatTooltip, MatSnackBar } from '@angular/material';
import { Note } from 'src/app/model/note.model';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-notes-iconlist',
  templateUrl: './notes-iconlist.component.html',
  styleUrls: ['./notes-iconlist.component.scss']
})
export class NotesIconlistComponent implements OnInit {
  @Input() note: Note;
  constructor(private noteService: NoteserviceService, private snackBar: MatSnackBar) { }
  ngOnInit() {

  }

  onDelete() {
    this.noteService.trashNote(this.note.id).subscribe((response) => {
      this.snackBar.open("Note Moved To Trashed", 'ok', { duration: 5000 });
    },
      error => {
        this.snackBar.open("error in Note Deletion", 'ok', { duration: 5000 });

      }

    );
  }

}
