import { Injectable } from '@angular/core';
import { HttpService } from './httpservice.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor( private httpservice: HttpService) { }

  getLabels(noteId:any){
    return this.httpservice.get(`${environment.labelApiURL}/${environment.getLabels}`, { headers: new HttpHeaders().set('token', sessionStorage.token)});
  }
}
