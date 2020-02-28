import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { NoteserviceService } from '../../services/noteservice.service';
import { HttpClient } from '@angular/common/http';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: Note[];
  pinNotes: Note[];
  trashNotes: Note[];
  archiveNotes: Note[];
  getAllNotes: [];
  private sub: any;
  private param: any;

  constructor(private matSnackBar: MatSnackBar, private route: ActivatedRoute
    , private noteService: NoteserviceService) {
    console.log(" Notes constructor");
    this.noteService.autoRefresh$.subscribe(() => {
      this.displayNotes();
      this.getAllTrashedNotes();
      this.getAllArchiveNotes();
    });
  }

  ngOnInit() {
    console.log(" Notes ngOnInit()");
    this.route
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
  }

  getAllTrashedNotes() {

    console.log("Trashed note Method Called");
    this.noteService.getAllTrashedNote().subscribe((data) => {
      this.trashNotes = data.list;
      if (this.trashNotes != undefined) {
        this.setTrasheNotes();
      }
      if (data.response == 'No Trashed Notes Available0') {
        console.log("Empty Trashed Display");
      }
    },
      (error) => {
        this.matSnackBar.open("Error in Dipslay Trashed Notes");
      });
  }

  displayNotes() {
    let note = this.noteService.getAllNotes();
    let pinnednote = this.noteService.getPinnedNotes();
    note.subscribe(
      (data) => {
        this.notes = data.list;
        if (this.notes != undefined) {
          this.setnotes();
        }

        console.log("" + this.notes);
      },
      (error: any) => {
        console.log(error)
        this.matSnackBar.open('error in note display', 'ok', { duration: 5000 });
      }
    );
    pinnednote.subscribe(
      (data) => {
        this.pinNotes = data.list;
        if (this.notes != undefined) {
          this.setPinNotes();
        }
      });
  }
  getAllArchiveNotes() {
    console.log( "get all achive");
    this.noteService.getAllArchiveNote().subscribe(
      (data) => {
        this.archiveNotes = data.list;
        console.log(this.archiveNotes);
        if (this.archiveNotes != undefined) { 
          this.setArchiveNotes();
        }
      },
      (error: any) => {
        this.matSnackBar.open("Error in Dipslay archive Notes");
      }
    );
  }
  setnotes() {
    console.log("setNotes");
    this.noteService.setNotesList(this.notes);
  }
  setPinNotes() {
    console.log("setPinNotes");
    this.noteService.setPinNotesList(this.pinNotes);
  }
  setArchiveNotes(){
    console.log("setArchiveNotes");
    this.noteService.setArchiveNotesList(this.archiveNotes);
  }
  setTrasheNotes() {
    console.log("setTrashNotes");
    this.noteService.setTrashedNotesList(this.trashNotes);
  }

}
