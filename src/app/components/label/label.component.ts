import { Component, OnInit, Input } from '@angular/core';
import { LabelService } from 'src/app/services/labelservice.service';
import { Note } from 'src/app/model/note.model';
import { Label } from 'src/app/model/label.model';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  labels:Label[];
  noteId:number;
  constructor(private labelService:LabelService) { }
  
  ngOnInit() {
    // this.getAllArchiveNotes();
    // this.getNoteId();
    this.getAllUserLabel();
  }
  
  getNoteId(){
    this.labelService.getlabelList().subscribe(
      message => {
        this.noteId = message.labels;
        console.log("ytytuiyuiyuiyuiyui",this.noteId);  
    });
  }
  getAllUserLabel(){
    this.labelService.getAllLabels().subscribe((data)=>{
      this.labels=data.list;
      console.log(this.labels);
    });
  }
  getAllNoteLabels() {
    this.labelService.getNoteLabels(this.noteId).subscribe((data)=>{
    });
    
  }

}
