import { Injectable } from '@angular/core';
import { HttpService } from './httpservice.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LabelService {
  private labelsList = new Subject<any>();

  constructor( private httpservice: HttpService) { }


  getNoteLabels(noteId:any){
    return this.httpservice.get(`${environment.labelApiURL}/${environment.getLabels}?noteId=${noteId}`, { headers: new HttpHeaders().set('token', sessionStorage.token)});
  }
  
  getAllLabels(){
    return this.httpservice.get(`${environment.labelApiURL}/${environment.getLabelsList}`, { headers: new HttpHeaders().set('token', sessionStorage.token)});
  }
  
  setlabelList(message:any){

      this.labelsList.next({labels:message});
  }
  getlabelList(): Observable<any> {
    console.log("trashNote Service Get");
    return this.labelsList.asObservable();
  }
 
}
