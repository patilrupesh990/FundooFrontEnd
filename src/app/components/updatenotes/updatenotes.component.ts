import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Note } from 'src/app/model/note.model';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-updatenotes',
  templateUrl: './updatenotes.component.html',
  styleUrls: ['./updatenotes.component.scss']
})
export class UpdatenotesComponent implements OnInit {
note:Note;
  constructor(public dialogRef: MatDialogRef<UpdatenotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private noteService:NoteserviceService,private snackbar:MatSnackBar) {
      this.note=this.data.note;
     }
    
  ngOnInit() {
  }
  onSubmit(){
    this.dialogRef.close();
    this.noteService.updateNotes(this.note).subscribe((response)=>{
        this.snackbar.open("Note Updated SuccessFully","ok",{duration:5000});
    },
    (error:any)=>{

    }
    
    );
  }
}
