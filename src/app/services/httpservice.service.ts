import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }
  
  post(url:any,body:any,options:any):Observable<any>{
    return this._http.post(url,body,options);
  }

  get(url:any,options:any):Observable<any>{
    return this._http.get(url,options);
  }

  put(url:any,body:any,options:any):Observable<any>{
    return this._http.put(url,body,options);
  }



}
