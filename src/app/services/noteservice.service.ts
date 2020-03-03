import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpService } from './httpservice.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Note } from '../model/note.model';

@Injectable({
  providedIn: 'root'
})

export class NoteserviceService {
  private noteId;

  private notesList = new Subject<any>();
  private pinNoteList = new Subject<any>();
  private archiveNoteList = new Subject<any>();
  private trashedNoteList = new Subject<any>();



  private content = new BehaviorSubject<number>(0);
  private pincontent = new BehaviorSubject<boolean>(false);

  private _autoRefresh$ = new Subject();
  public share = this.content.asObservable();
  public sharepin = this.pincontent.asObservable();

  get autoRefresh$() {
    return this._autoRefresh$;
  }

  constructor(private _http: HttpClient, private httpservice: HttpService) { }
  private httpOtions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };
  createNote(note: any, token: any): Observable<any> {
    console.log("token:::::" + sessionStorage.token);
    console.log(`${environment.notesApiURL}/${environment.createNote}`);
    return this.httpservice.post(`${environment.notesApiURL}/${environment.createNote}`, note, { headers: new HttpHeaders().set('token', sessionStorage.token) }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }

  getAllNotes() {
    return this.httpservice.get(`${environment.notesApiURL}/${environment.getNotes}`, { headers: new HttpHeaders().set('token', sessionStorage.token) });
  }

  pinNotes(note: any) {
    const params = new URLSearchParams();
    console.log("note id----->" + note);
    params.set('noteId', note);
    return this.httpservice.put(`${environment.notesApiURL}/${environment.pinNote}?noteId=${note}`, {}, { headers: new HttpHeaders().set('token', sessionStorage.token) }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }

  getPinnedNotes() {
    return this.httpservice.get(`${environment.notesApiURL}/${environment.getpinnedNotes}`, { headers: new HttpHeaders().set('token', sessionStorage.token) });
  }

  updateNotes(note: any) {
    return this.httpservice.put(`${environment.notesApiURL}/${environment.updateNotes}`, note, { headers: new HttpHeaders().set('token', sessionStorage.token) }).pipe(tap(() => {
      this._autoRefresh$.next();
    }))
  }

  trashNote(noteId: any) {
    return this.httpservice.put(`${environment.notesApiURL}/${environment.trashNote}?noteId=${noteId}`, {}, { headers: new HttpHeaders().set('token', sessionStorage.token) }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }

  restoreNote(noteId: number) {
    console.log(`${environment.notesApiURL}/${environment.deleteNote}?noteId=${noteId}`);
    return this.httpservice.put(`${environment.notesApiURL}/${environment.trashNote}?noteId=${noteId}`, {}, { headers: new HttpHeaders().set('token', sessionStorage.token) }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }

  moveToArchiveNote(noteId: any) {
    return this.httpservice.put(`${environment.notesApiURL}/${environment.archiveNote}?noteId=${noteId}`, {}, { headers: new HttpHeaders().set('token', sessionStorage.token) }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }


  getAllTrashedNote() {
    return this.httpservice.get(`${environment.notesApiURL}/${environment.getTrashNotes}`, { headers: new HttpHeaders().set('token', sessionStorage.token) });
  }

  getAllArchiveNote() {
    return this.httpservice.get(`${environment.notesApiURL}/${environment.getArchiveNotes}`, { headers: new HttpHeaders().set('token', sessionStorage.token) });
  }

  deleteNote(noteId: number) {
    console.log(`${environment.notesApiURL}/${environment.deleteNote}?noteId=${noteId}`);

    return this.httpservice.delete(`${environment.notesApiURL}/${environment.deleteNote}?noteId=${noteId}`, { headers: new HttpHeaders().set('token', sessionStorage.token) }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }

  addColor(noteId,color){
    console.log(`${environment.notesApiURL}/${environment.addcolor}?noteId=${noteId}&&color=${color}`);
    return this.httpservice.put(`${environment.notesApiURL}/${environment.addcolor}?noteId=${noteId}&color=${color}`,{}, { headers: new HttpHeaders().set('token', sessionStorage.token) }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }

  addReminder(note:any,time:any){
      return this.httpservice.put(`${environment.notesApiURL}/${environment.addreminder}?time=${time}`,note,{headers:new HttpHeaders().set('token',localStorage.token)}).pipe(tap(() => {
        this._autoRefresh$.next();
      }));
  }



  updateNoteId(noteId) {
    this.content.next(noteId);
  }
  getNoteId() {
    return this.noteId;
  }
  updateNotePin(ispin) {
    this.pincontent.next(ispin);
  }

  setNotesList(message: Note[]) {
    this.notesList.next({ notes: message });
  }
  getNotesList(): Observable<any> {
    console.log("getNotesListService Call");
    return this.notesList.asObservable();
  }
  setPinNotesList(message: Note[]) {
    this.pinNoteList.next({ notes: message });
  }
  getPinNotesList(): Observable<any> {
    return this.pinNoteList.asObservable();
  }
  setTrashedNotesList(message: Note[]) {
    console.log("archiveNote Service set");
    this.trashedNoteList.next({ notes: message });
  }
  getTrashedNotesList(): Observable<any> {
    console.log("trashNote Service Get");
    return this.trashedNoteList.asObservable();
  }
  setArchiveNotesList(message: Note[]) {
    console.log("archiveNote Service set");
    this.archiveNoteList.next({ notes: message });
  }
  getArchiveNotesList(): Observable<any> {
    console.log("getArchive Service Get");
    return this.archiveNoteList.asObservable();
  }


}
