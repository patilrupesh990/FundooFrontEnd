import { Injectable } from '@angular/core';
import { HttpService } from './httpservice.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LabelService {
  private noteId = new Subject<any>();
  private labelId = new Subject<any>();
  private labelList=new Subject<any>();
  private noteList=new Subject<any>();
  constructor( private httpservice: HttpService) { }


  getNoteLabels(noteId:any){
    return this.httpservice.get(`${environment.labelApiURL}/${environment.getLabels}?noteId=${noteId}`, { headers: new HttpHeaders().set('token', sessionStorage.token)});
  }
  
  getAllLabels(){
    return this.httpservice.get(`${environment.labelApiURL}/${environment.getLabelsList}`, { headers: new HttpHeaders().set('token', sessionStorage.token)});
  }

  addLabel(noteId:any,labelId){
    return this.httpservice.post(`${environment.labelApiURL}/${environment.addLabel}?labelId=${labelId}&noteId=${noteId}`,{},{headers:new HttpHeaders().set('token',sessionStorage.token)});
  }

  getNotesByLabel(labelId){
    return this.httpservice.get(`${environment.labelApiURL}/${environment.getNotesByLabelId}?labelId=${labelId}`,{headers:new HttpHeaders().set('token',sessionStorage.token)});
  }
  
  //Subject Getters And Setters

  setNoteIdForLabel(message:any){

      this.noteId.next({labels:message});
  }
  getNoteIdForLabel(): Observable<any> {
    console.log("trashNote Service Get");
    return this.noteId.asObservable();
  }
  setLabelId(message:any){
    this.labelList.next({labels:message});
  }
  getLabelId(message:any):Observable<any>{
    return this.labelList.asObservable();
  }

  setLabelList(message:any){
      this.labelList.next({label:message});
  }
  getLabelList(){
    return this.labelList.asObservable();
  } 
  setNoteList(message:any){
    this.noteList.next({notes:message});
  }
  getNoteList(){
    return this.noteList.asObservable();
  }
  

}
