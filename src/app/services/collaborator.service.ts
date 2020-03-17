import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from './httpservice.service';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {
  private _autoRefresh$ = new Subject();

  get autoRefresh$() {
    return this._autoRefresh$;
  }

  constructor(private _http: HttpClient, private httpservice: HttpService) { }
  private httpOtions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };

  addCollaborator(email: any, noteId: any): Observable<any> {
    return this.httpservice.post(`${environment.collaboratorApi}/${environment.addCollaborator}?noteId=${noteId}&email=${email}`, {}, { headers: new HttpHeaders().set('token', sessionStorage.token) }).pipe(tap(()=>{
        this._autoRefresh$.next();
    }));
  }
  getCollaboratorList(noteId: any): Observable<any> {
    return this.httpservice.get(`${environment.collaboratorApi}/${environment.getCollaborator}?noteId=${noteId}`, { headers: new HttpHeaders().set('token', sessionStorage.token) });
  }

  removeCollaborator(noteId,CollaboratorId):Observable<any>{
    return this.httpservice.delete(`${environment.collaboratorApi}/${environment.removecolaborator}?userId=${CollaboratorId}&noteID=${noteId}`, { headers: new HttpHeaders().set('token', sessionStorage.token) }).pipe(tap(()=>{
      this._autoRefresh$.next();
    }));
  }
}


