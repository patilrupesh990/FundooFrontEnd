import { Component, OnInit, Input, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { LabelService } from 'src/app/services/labelservice.service';
import { Note } from 'src/app/model/note.model';
import { Label } from 'src/app/model/label.model';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NoteData } from 'src/app/model/noteData.model';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  notes: NoteData[];
  labels: Label[];
  noteId: number;
  labelId;
  lname:string="";

  constructor(public dialogRef: MatDialogRef<LabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private labelService: LabelService, private matSnackBar: MatSnackBar) { 
      console.log("constructpor",data.note.id);
      this.noteId=data.note.id;
      this.getAllUserLabel();
    }

  ngOnInit() {
    this.labelService.autoRefresh$.subscribe(()=>{
      this.getAllUserLabel();
    })
    
    this.getNoteId();
    
  }

  getNoteId() {
    this.labelService.getNoteIdForLabel().subscribe(
      message => {
        this.noteId = message.labels;
        console.log("ytytuiyuiyuiyuiyui", this.noteId);
      });
  }
  getAllUserLabel() {
    this.labelService.getAllLabels().subscribe((response) => {
      console.log("label list", response);
      this.labels = response.list;
      this.setLabelList();
    });
  }
  getNotesList(labelId) {
    this.labelService.getNotesByLabel(10).subscribe((data) => {
      this.notes = data;
      this.setNotesList();
      console.log("notes list by labelid", data);
    });
  }
  onCheckedAddLabel(labelId, noteId) {
    console.log("mat on checked label called");
    this.labelService.addLabel(this.noteId, labelId).subscribe((data) => {
      this.matSnackBar.open(data.response, "Ok", { duration: 3000 });
    },
      (error) => {
        this.matSnackBar.open("error", "Ok", { duration: 3000 });
      });
  }
  onClickCreateLabel(InputLabel){
    // document.getElementById("textfield1").value = "";
    console.log(InputLabel,"label input");
    let label={
      "labelName":InputLabel
    }
      this.labelService.createLabel(label).subscribe((response)=>{
        this.matSnackBar.open("Label Created","Ok",{duration:3000});
      });
  }
  
  setLabelList() {
    this.labelService.setLabelList(this.labels);
  }
  setNotesList() {
    this.labelService.setNoteList(this.notes);
  }
  getLabelId() {
    this.labelService.getLabelId((message => {
      this.getNotesList(message);
    }));
  }


}
