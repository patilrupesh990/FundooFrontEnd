import { Component, OnInit, Input } from '@angular/core';
import { MatTooltip, MatSnackBar } from '@angular/material';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { Note } from 'src/app/model/note.model';
import { LabelService } from 'src/app/services/labelservice.service';

@Component({
  selector: 'app-notes-iconlist',
  templateUrl: './notes-iconlist.component.html',
  styleUrls: ['./notes-iconlist.component.scss']
})
export class NotesIconlistComponent implements OnInit {
  @Input() note :Note;
  noteId:number;
  isArchive:boolean=false;
  constructor(private noteService: NoteserviceService,private labelService:LabelService, private snackBar: MatSnackBar) {
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

  setColor( color) {
    console.log("Color---->", color,this.note.id);
    
    this.noteService.addColor(this.note.id,color).subscribe(res => {

      console.log("Resssponse backk---->");

      console.log("Response after setting note color-------->", res);
    })
  }
  onclicksetNoteid(noteId:any){
    console.log(noteId);
      this.labelService.setlabelList(noteId);
  }

  arrayOfColors = [
    [
      { color: "rgb(255, 179, 255)", name: "pink" },
      { color: "rgb(255, 255, 128)", name: "darkGolden" },
      { color: "white", name: "white" }
    ],
    [
      { color: "slategray", name: "grey" },
      { color: "rgb(153, 221, 255)", name: "light blue" },
      { color: "rgb(200, 232, 104)", name: "yellow" }
    ],
    [
      { color: "rgb(255, 153, 0)", name: "orange" },
      { color: "rgb(97, 191, 82)", name: "green" },
      { color: " rgb(158, 136, 191)", name: "darkYellow" }
    ]
  ]
}
