import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'
import { HttpClient, HttpHeaderResponse ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userApiUrl=environment.userApiURL;
  private httpOtions={
  headers: new HttpHeaders ({'content-type':'application/json'})
  };
  constructor(private _http:HttpClient,private httpservice:HttpService) { }
   
  registerUser(user:any):Observable<any>
  {
    console.log("User Email",user.email);
    return this.httpservice.post(`${this.userApiUrl}/${environment.registerURL}`,user,this.httpOtions);
    // return this._http.post(`${this.userApiUrl}/${environment.registerURL}`,user,this.httpOtions);
  }
  
  loginUser(user:any):Observable<any>
  {
    console.log("calling to.."+`${this.userApiUrl}/${environment.loginURL}`);
    return this.httpservice.post(`${this.userApiUrl}/${environment.loginURL}`,user,{responseType: 'text'});
    //return this._http.post(`${this.userApiUrl}/${environment.loginURL}`,user,{responseType: 'text'});
  }

  activateUser(user:any,token:string):Observable<any>
  {
    console.log("calling to.."+`${this.activateUser}/${token}`);
    return this.httpservice.put(`${this.userApiUrl}/${environment.userActivURL}/${token}`,user,{responseType: 'text'});
    // return this._http.put(`${this.userApiUrl}/${environment.userActivURL}/${token}`,user, {responseType: 'text'});
  }

  forgotPasswordVerifyMail(user:any):Observable<any>
  {
    console.log("calling to.."+`${this.userApiUrl}/${environment.forgotPasswordURL}`);
    return this.httpservice.post(`${this.userApiUrl}/${environment.forgotPasswordURL}`,user,{responseType: 'text'});
    //return this._http.post(`${this.userApiUrl}/${environment.forgotPasswordURL}`,user,{responseType: 'text'});
  }
  resetPassword(user:any,token:string):Observable<any>                                                                                                                                                                                                                                                                                               
  {
    console.log("calling to.."+`${this.resetPassword}/${token}`);
    return this.httpservice.put(`${this.userApiUrl}/${environment.resetPasswordURL}/${token}`,user,{responseType: 'text'});
    // return this._http.put(`${this.userApiUrl}/${environment.resetPasswordURL}/${token}`,user, {responseType: 'text'});
  }
}
