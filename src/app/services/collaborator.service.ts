import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from './httpservice.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  constructor(private _http: HttpClient, private httpservice: HttpService) {}
    private httpOtions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };

    addCollaborator(email:any,noteId: any): Observable<any> {
        return this.httpservice.post(`${environment.collaboratorApi}/${environment.addCollaborator}?noteId=${noteId}&email=${email}`,{},{headers:new HttpHeaders().set('token',sessionStorage.token)});
    }
    getCollaboratorList(noteId: any): Observable<any> {
      return this.httpservice.get(`${environment.collaboratorApi}/${environment.getCollaborator}?noteId=${noteId}`,{headers:new HttpHeaders().set('token',sessionStorage.token)});
  }
}
  
  
