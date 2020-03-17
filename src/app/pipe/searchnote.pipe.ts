import { Pipe, PipeTransform } from '@angular/core';
import { Notes } from '../model/notes.model';
import { NoteData } from '../model/noteData.model';

@Pipe({
  name: 'searchnote'
})
export class SearchnotePipe implements PipeTransform {

  transform(notes: NoteData[], searchTerm:string): NoteData[] {
   if(!notes || !searchTerm){
     return notes;
   }
   return notes.filter(notes=>
    notes.title.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1);
  }

}
