import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import {Router,ParamMap} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  notes:Note=new Note();
  forgotpasswordForm: FormGroup;
  open:boolean=false
  constructor(private formBuilder: FormBuilder, private router: Router,private noteService:NoteserviceService) { }

  ngOnInit() {
    this.forgotpasswordForm=this.formBuilder.group({
      title:['',[Validators.required]],
      description:['',[Validators.required]]
    });
  }
  onClickCreateNoteOpen()
  {
    this.open=!this.open;
  }
  
}
