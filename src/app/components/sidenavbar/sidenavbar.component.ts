import { Component, OnInit,ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SideNavService } from 'src/app/services/sidenavservice.service';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { Note } from 'src/app/model/note.model';
import { LabelService } from 'src/app/services/labelservice.service';
import { Label } from 'src/app/model/label.model';
import { NoteData } from 'src/app/model/noteData.model';
@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {
  @ViewChild('sidenav',{ static: true }) public sidenav: MatSidenav;
  tab : any = 'tab1';
  labels:Label[];
  notes:NoteData[];
  constructor(private sideNavService:SideNavService,private labelservice:LabelService) { }

  ngOnInit() {
   this.getLabelList();
   this.getNotesList();
  }
  changeColor(check){
    // event.srcElement.classList.add("active-color");
    console.log(check);
    if(check==1){
      this.tab = 'tab1';
    }else if(check==2){

      this.tab = 'tab2';
    }else{
      this.tab = 'tab3';
    }    
  }
  
 getLabelList(){
    this.labelservice.getLabelList().subscribe(message=>{
        this.labels=message.label;
        console.log("side nave labels:",this.labels);
    });
 }

 getNotesList(){
   this.labelservice.getNoteList().subscribe(message=>{
        this.notes=message.notes;
        console.log("side nave notes:",this.notes);
   });
 }
 onCLickSetLabelId(labelId){
    this.labelservice.setLabelId(labelId);
 }

}
