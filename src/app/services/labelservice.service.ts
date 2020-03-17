import { Injectable } from '@angular/core';
import { HttpService } from './httpservice.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LabelService {
  private noteId = new Subject<any>();
  private labelId = new Subject<any>();
  private labelList=new Subject<any>();
  private noteList=new Subject<any>();
  private _autoRefresh$ = new Subject();
  private notesLabel=new Subject<any>();
  private labelsNotes=new Subject<any>();

  constructor( private httpservice: HttpService) { }
  
  get autoRefresh$() {
    return this._autoRefresh$;
  }

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

  getLabelsByNoteId(noteId){
    return this.httpservice.get(`${environment.labelApiURL}/${environment.getLabelsByNoteId}?noteID=${noteId}`,{headers:new HttpHeaders().set('token',sessionStorage.token)});
  }
    //Subject Getters And Setters
  setNoteIdForLabel(message:any){
      this.noteId.next({labels:message});
  }
  getNoteIdForLabel(): Observable<any> {
    console.log("trashNote Service Get");
    return this.noteId.asObservable();
  }
  
  setlabelsNotes(message:any){
    return this.labelsNotes.next({notes:message});
  }
  getlabelsNotes():Observable<any>{
    return this.labelsNotes.asObservable();
  }

  setLabelId(message:any){
    this.labelList.next({labels:message});
  }
  createLabel(label){
    return this.httpservice.post(`${environment.labelApiURL}/${environment.createLabel}`,label,{headers:new HttpHeaders().set('token',sessionStorage.token)}).pipe(tap(()=>{
      this.autoRefresh$.next();
    }));
  }

  deleteLabel(label){
    return this.httpservice.delete(`${environment.labelApiURL}/${environment.deleteLabel}?labelId=${label}`,{headers:new HttpHeaders().set('token',sessionStorage.token)}).pipe(tap(()=>{
      this.autoRefresh$.next();
    }));
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
  
  setNoteLabelList(message:any){
    this.notesLabel.next({notes:message});
  }
  getNoteLabelList(){
    return this.notesLabel.asObservable();
  }
  

}
