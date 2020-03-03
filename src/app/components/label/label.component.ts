import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { LabelService } from 'src/app/services/labelservice.service';
import { Note } from 'src/app/model/note.model';
import { Label } from 'src/app/model/label.model';
import { MatSnackBar } from '@angular/material';
import { NoteData } from 'src/app/model/noteData.model';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {


  notes:NoteData[];
  labels: Label[];
  noteId: number;
  labelId;
  constructor(private labelService: LabelService,private matSnackBar:MatSnackBar) { }

  ngOnInit() {
    // this.getAllArchiveNotes();
    // this.getNoteId();
    this.getAllUserLabel();
    this.getNoteId();
    // this.getNotesList();
  }

  getNoteId() {
    this.labelService.getNoteIdForLabel().subscribe(
      message => {
        this.noteId = message.labels;
        console.log("ytytuiyuiyuiyuiyui", this.noteId);
      });
  }
  getAllUserLabel() {
    this.labelService.getAllLabels().subscribe((data) => {
      this.labels = data.list;
      this.setLabelList();
    });
  }
  getNotesList(labelId){
    this.labelService.getNotesByLabel(10).subscribe((data)=>{
      this.notes=data;
      this.setNotesList();
      console.log("notes list by labelid",data);
    });
  }
  onCheckedAddLabel(labelId,noteId) {
    console.log("mat on checked label called");
    this.labelService.addLabel(this.noteId,labelId,).subscribe((data)=>{
        this.matSnackBar.open(data.response,"Ok",{duration:3000});
    },
    (error)=>{
      this.matSnackBar.open("error","Ok",{duration:3000});
    }
    );
   }

  setLabelList() {
    this.labelService.setLabelList(this.labels);
  }
  setNotesList(){
    this.labelService.setNoteList(this.notes);
  }
  getLabelId(){
    this.labelService.getLabelId((message=>{
      this.getNotesList(message);
    }));
  }
}
