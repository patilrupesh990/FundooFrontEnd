import { Component, OnInit, Input,OnChanges } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';
import { callbackify } from 'util';
import { Label } from 'src/app/model/label.model';
import { LabelService } from 'src/app/services/labelservice.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})

export class DisplayNotesComponent implements OnInit,OnChanges {
  trashedNotes: boolean = false;
  archiveNotes: boolean = false;
  trashEmpty:boolean=false;

  notes: any;
  pinNotes: any;
  getAllNotes: [];
  private sub: any;
  private param: any;

  pin:boolean=true;
  unpin:boolean=true;
  labels;
  searchnote:any;
  searchNotes:boolean;
  labelNotes:boolean;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private matSnackBar: MatSnackBar, private router: Router, private route: ActivatedRoute
    , private noteService: NoteserviceService,private labelService:LabelService, private httpClient: HttpClient) {
      this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.param = params['page'] || '';
        if (this.param == "archive") {
          console.log("elseif archive");
          this.getAllArchiveNotes();
        }
        else if (this.param == "trash") {
          console.log("elseif trash");
          this.getAllTrashedNotes();
        }
        else if (this.param == "labels") {
          console.log("elseif labels");
          this.getLabelsNotes();
        }
        else {
          console.log("else display");
          this.displayNotes();
        }
      });
  }
  ngOnChanges(){
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.param = params['page'] || '';
        if (this.param == "archive") {
          console.log("elseif archive");
          this.getAllArchiveNotes();
        }
        else if (this.param == "labels") {
          console.log("elseif labels");
          this.getLabelsNotes();
        }
        else if (this.param == "trash") {
          console.log("elseif trash");
          this.getAllTrashedNotes();
        }
        else {
          console.log("else display");
          this.displayNotes();
        }
      });
      this.getSearchNoteData();
  }
  ngOnInit() {
    
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.param = params['page'] || '';
        if (this.param == "archive") {
          console.log("elseif archive");
          this.getAllArchiveNotes();
        }
        else if (this.param == "trash") {
          console.log("elseif trash");
          this.getAllTrashedNotes();
        }
        else {
          console.log("else display");
          this.displayNotes();
        }
      });
      this.getSearchNoteData();
  }

  getAllTrashedNotes() {
    this.trashedNotes = true;
    this.archiveNotes = false;
    this.labelNotes=false;

    console.log("trashed Notes subscribe..");
    this.noteService.getTrashedNotesList().subscribe(message => {
      console.log("trashed Notes subscribe..", message.notes);
      this.notes = message.notes;
      console.log("final trsah data" + this.trashedNotes);
      if(this.notes==null){
        this.trashEmpty=true;
      }else{
        this.trashEmpty=false;
      }

    });
  }

  getLabelsNotes(){
    this.labelNotes=true;
    this.trashedNotes = false;
    this.archiveNotes = false;
    this.labelService.getlabelsNotes().subscribe(message=>{
      this.notes=message.notes;
    })
  }

  displayNotes() {
    this.trashedNotes = false;
    this.archiveNotes = false;
    this.labelNotes=false;
    this.trashEmpty=false;

    console.log("Display Notes Call");
    this.noteService.getNotesList().subscribe(message => {
      this.notes = message.notes;
      console.log(this.notes);
    });
    this.noteService.getPinNotesList().subscribe(message => {
      console.log("Display PinNotes Call");
      this.pinNotes = message.notes;
      console.log(this.pinNotes);
    });
  }
  getAllArchiveNotes() {
    this.archiveNotes = true;
    this.trashedNotes = false;
    this.trashEmpty=false;
    this.labelNotes=false;

    this.noteService.getArchiveNotesList().subscribe(message => {
      this.notes = message.notes;
      console.log(this.notes);
    });
  }

 
  onPin(noteId) {
    console.log("on pin called");

    this.noteService.pinNotes(noteId).subscribe(response => {
      if(!this.pin){
      this.matSnackBar.open('note Pinned', 'ok', { duration: 5000 });
      this.pin=true;
      }
      if(!this.unpin){
        this.matSnackBar.open('note UnPinned', 'ok', { duration: 5000 });
        this.unpin=true;
      }
    },
      (error: any) => {
        console.log(error)
        this.matSnackBar.open('error in note pinned', 'ok', { duration: 5000 });
      }
    );
  }

  openDialog(note): void {
    console.log("note Id:" + note.id);
    const dialogRef = this.dialog.open(UpdatenotesComponent, {
      width: 'auto',
      panelClass: 'custom-dialog-container',
      data: { note }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  onClickDelete(noteId: number) {
    this.noteService.deleteNote(noteId).subscribe(data => {
      this.matSnackBar.open("Note Deleted", "Ok", { duration: 3000 });
      this.notes=null;
     
    },
      (error) => {
        this.matSnackBar.open("Error in Note Deletion", "Ok", { duration: 4000 });
      }
    );
  }

  onClickRestore(noteId: number) {
    this.noteService.restoreNote(noteId).subscribe(data => {
      this.notes=null;
      
      this.matSnackBar.open("Note Restored", "Ok", { duration: 3000 });
    },
      (error) => {
        this.matSnackBar.open("Error while Note Restoring", "Ok", { duration: 3000 });
      }
    );
  }

  getSearchNoteData(){
    this.noteService.getSearchNoteData().subscribe((message)=>{
      console.log("search data",message.notes);
        this.searchnote=message.notes;
        this.searchNotes=true;
        if(message.notes==""){
          this.searchNotes=false;
        }
    });
  }

}
