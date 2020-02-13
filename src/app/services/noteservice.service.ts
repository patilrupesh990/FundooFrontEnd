import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse ,HttpHeaders} from '@angular/common/http';
import { HttpService } from './httpservice.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  constructor(private _http:HttpClient,private httpservice:HttpService) { }
  private httpOtions={
    headers: new HttpHeaders ({'content-type':'application/json'})
    };
    createNote(note:any,token:any):Observable<any>
    {
      console.log("token:::::"+sessionStorage.token);
      console.log(`${environment.notesApiURL}/${environment.createNote}`);
      return this.httpservice.post(`${environment.notesApiURL}/${environment.createNote}/${localStorage.token}`,note,{headers: new HttpHeaders().set('token', localStorage.token) });
    }
}
