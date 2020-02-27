import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-archivenotes-iconlist',
  templateUrl: './archivenotes-iconlist.component.html',
  styleUrls: ['./archivenotes-iconlist.component.scss']
})
export class ArchivenotesIconlistComponent implements OnInit {
  notes:Note;
  constructor() { }

  ngOnInit() {
  }

}
