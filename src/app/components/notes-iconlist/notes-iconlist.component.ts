import { Component, OnInit, Input } from '@angular/core';
import { MatTooltip, MatSnackBar, MatDialog } from '@angular/material';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { Note } from 'src/app/model/note.model';
import { LabelService } from 'src/app/services/labelservice.service';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { CollaboratorComponent } from '../collaborator/collaborator.component';

@Component({
  selector: 'app-notes-iconlist',
  templateUrl: './notes-iconlist.component.html',
  styleUrls: ['./notes-iconlist.component.scss']
})
export class NotesIconlistComponent implements OnInit {
  @Input() note :Note;
  noteId:number;
  isArchive:boolean=false;
  public selectedTime = '18:33';
  today: string;
  isoo: any;
  constructor(private dialog: MatDialog,private noteService: NoteserviceService, private atp: AmazingTimePickerService,private labelService:LabelService, private snackBar: MatSnackBar) {
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

  onClickArchive(archive:boolean,pin) {
    this.noteService.moveToArchiveNote(this.note.id).subscribe((response) => {
      console.log("value::",this.note.isArchive,"pin",this.note.isPin);
      if(this.note.isArchive==true)
      {

        this.snackBar.open("UnArchived", "OK", { duration: 5000 });
      }
      if(this.note.isPin=true){
        this.snackBar.open("Note unpinned and Archived", "OK", { duration: 5000 });
      }
      else{
        this.snackBar.open("Note Archived", "OK", { duration: 5000 });
      }

    },
      error => {
        this.snackBar.open("error in Note thrash operation", "OK", { duration: 5000 });
      });
  }

  open(noteID) {
    console.log("NoteID to set alram-----",noteID);
    const amazingTimePicker = this.atp.open({
      time: this.selectedTime,
      theme: 'dark',
      arrowStyle: {
        background: 'red',
        color: 'white'
      }
    });
    amazingTimePicker.afterClose().subscribe(time => {
      this.selectedTime = time;
      var str = this.selectedTime;
      let time1 = str.replace(":", ",")
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();

      this.today = yyyy + ',' + mm + ',' + dd;
      // console.log("This date---", this.today);
      let con = this.today.concat(',', time1, ',', '0')
      // console.log("Time--", con);

      let timee = con.split(",")
      let op = new Date(parseInt(timee[0]), parseInt(timee[1]), parseInt(timee[2]), parseInt(timee[3]), parseInt(timee[4]), parseInt(timee[5]))
      let iso = op.toLocaleString();
      // let iso = op.toLocaleTimeString() 
      console.log("ISOOO Date--",iso);
   
      let dateTime={
        "id":noteID,
        "reminder":iso,
      }
      console.log("Date time to set reminder--->",dateTime);

      this.noteService.addReminder(dateTime,iso).subscribe(res => {
        console.log("Response after setting for date time ----------->", res);
        this.snackBar.open("reminder Added","OK",{duration:3000});
      })  
    });
  }
  dialogCol(): void {
    console.log("Note id in colab111111--->", this.note.id);

    const dialogRef = this.dialog.open(CollaboratorComponent, {
        width: '490px',
      height: '290px',
  
      panelClass: 'custom-dialog-container',
      data: {  noteId: this.note.id  }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    // const dialogRef = this.dialog.open(CollaboratorComponent, {
     //   data: { noteId: this.note.id }
    // });

  }


  setColor( color) {
    console.log("Color---->", color,this.note.id);
    this.noteService.addColor(this.note.id,color).subscribe(res => {
      this.snackBar.open("color Added","OK",{duration:3000});
    })
  }
  onclicksetNoteid(noteId:any){
    console.log(noteId);
      this.labelService.setNoteIdForLabel(noteId);
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
