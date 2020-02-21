import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders,HttpParams } from '@angular/common/http';
import { HttpService } from './httpservice.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NoteserviceService {
  private noteId;
 
  private content=new BehaviorSubject<number>(0);
  private pincontent=new BehaviorSubject<boolean>(false);
  private _autoRefresh$ = new Subject();
  public share=this.content.asObservable();
  public sharepin=this.pincontent.asObservable();
  
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
    return this.httpservice.post(`${environment.notesApiURL}/${environment.createNote}`, note, { headers: new HttpHeaders().set('token', localStorage.token) }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }

  getAllNotes() {
    return this.httpservice.get(`${environment.notesApiURL}/${environment.getNotes}`, { headers: new HttpHeaders().set('token', localStorage.token) });
  }

  pinNotes(note: any) {
    const params = new URLSearchParams();
    console.log("note id----->"+note);
    params.set('noteId', note);
    return this.httpservice.put(`${environment.notesApiURL}/${environment.pinNote}?noteId=${note}`, {}, { headers: new HttpHeaders().set('token', localStorage.token)});
  }

  getPinnedNotes(){
    return this.httpservice.get(`${environment.notesApiURL}/${environment.getpinnedNotes}`, { headers: new HttpHeaders().set('token', localStorage.token) });
  }


  updateNoteId(noteId){
    this.content.next(noteId);
  }
  updateNotePin(ispin){
    this.pincontent.next(ispin);
  }
}
