import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SideNavService } from 'src/app/services/sidenavservice.service';
import { UserService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter<boolean>();
  opened:boolean=false;
  uName=sessionStorage.uname;
  name=sessionStorage.response;;
  constructor(private sideNavService: SideNavService,private userservice:UserService) {

  }
  
  ontoggel(input:any){
    console.log("1"+input);
    this.toggleEvent.emit(input);
    console.log(input);
    this.opened=!this.opened;
  }

  ngOnInit() {
    // this.getName();
    // this.getUserName();
  }


  onClickClear(){
    sessionStorage.clear();
    localStorage.clear();
  }
  

  

}
