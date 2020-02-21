import { Component, OnInit,Output, EventEmitter, OnChanges  } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { Router, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';
import { HttpService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})

export class DisplayNotesComponent implements OnInit{
 
  notes : any;
  pinNotes:any;
  getAllNotes: [];
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder, private matSnackBar: MatSnackBar, private router: Router, private noteService: NoteserviceService,private httpClient: HttpClient) { }
  
  ngOnInit() {
    console.log("ng on init display notes");
    this.noteService.autoRefresh$.subscribe(()=>{
      this.getNotes();
    }); 
    this.getNotes();
  }

  private getNotes(){
    let note=this.noteService.getAllNotes();
    let pinnednote=this.noteService.getPinnedNotes();
    note.subscribe(
      (data)=>{
        console.log(""+data.response);
        this.notes=data.list;
        console.log(""+this.notes);
      },
      (error: any) => {
            console.log(error)
            this.matSnackBar.open('error in note display', 'ok', { duration: 5000 });
          }
      );
      pinnednote.subscribe(
       (data)=> {
         this.pinNotes=data.list;
      });
    }

  onClicksetNoteId(id,isPin){
    this.noteService.updateNoteId(id);
    this.noteService.updateNotePin(isPin);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(UpdatenotesComponent, {
      width: '500px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

 
  

}
