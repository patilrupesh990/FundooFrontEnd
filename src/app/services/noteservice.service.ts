import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse ,HttpHeaders} from '@angular/common/http';
import { HttpService } from './httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  constructor(private _http:HttpClient,private httpservice:HttpService) { }
  private httpOtions={
    headers: new HttpHeaders ({'content-type':'application/json'})
    };
}
