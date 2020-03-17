import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatDialog } from '@angular/material';
import { SideNavService } from 'src/app/services/sidenavservice.service';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { Note } from 'src/app/model/note.model';
import { LabelService } from 'src/app/services/labelservice.service';
import { Label } from 'src/app/model/label.model';
import { NoteData } from 'src/app/model/noteData.model';
import { LabelComponent } from '../label/label.component';
import { EditlabelComponent } from '../editlabel/editlabel.component';
@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;
  tab: any = 'tab1';
  labels: Label[];
  notes: NoteData[];
  constructor(private dialog: MatDialog,private sideNavService: SideNavService, private labelservice: LabelService) { }

  ngOnInit() {
    this.getLabelList();
    this.getNotesList();
    this.labelservice.autoRefresh$.subscribe(()=>{
      this.getLabelList();
    });
    
  }
  changeColor(check) {
    // event.srcElement.classList.add("active-color");
    console.log(check);
    if (check == 1) {
      this.tab = 'tab1';
    } else if (check == 2) {

      this.tab = 'tab2';
    } else {
      this.tab = 'tab3';
    }
  }

  getLabelList(){
    this.labelservice.getAllLabels().subscribe(message=>{
         this.labels=message.list;
        console.log(message);
    })
  }

  getNotesList() {
    this.labelservice.getNoteList().subscribe(message => {
      this.notes = message.notes;
      console.log("side nave notes:", this.notes);
    });
  }
  onCLickSetLabelId(labelId) {
    console.log("dfdfdfd",labelId);
    this.labelservice.getNotesByLabel(labelId).subscribe((data)=>{
          console.log(data);
          this.setlabelNotes(data);
    });
  }

  setlabelNotes(notes){
      this.labelservice.setlabelsNotes(notes);
  }

  openDialog(labels:Label[]): void {
    const dialogRef = this.dialog.open(EditlabelComponent, {
      width: '380px',
      height: 'auto',

      data: { labels }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
