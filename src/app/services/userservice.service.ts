import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'
import { HttpClient, HttpHeaderResponse ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userApiUrl=environment.userApiURL;
  private httpOtions={
  headers: new HttpHeaders ({'content-type':'application/json'})
  };
  constructor(private _http:HttpClient) { }
   
  registerUser(user:any):Observable<any>
  {
    console.log("User Email",user.email);
    return this._http.post(`${this.userApiUrl}/${environment.registerURL}`,user,this.httpOtions);
  }
  
  loginUser(user:any):Observable<any>
  {
    console.log("calling to.."+`${this.userApiUrl}/${environment.loginURL}`);
    return this._http.post(`${this.userApiUrl}/${environment.loginURL}`,user,this.httpOtions);
  }
}
