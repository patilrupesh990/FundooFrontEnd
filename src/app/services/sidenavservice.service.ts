import { Injectable, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class SideNavService {
 public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { } 
 

  public toggle() {
    return this.sideNavToggleSubject.next(null);
  } 
}
