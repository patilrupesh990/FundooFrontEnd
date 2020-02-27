import { Component, OnInit,ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SideNavService } from 'src/app/services/sidenavservice.service';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { Note } from 'src/app/model/note.model';
@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {
  @ViewChild('sidenav',{ static: true }) public sidenav: MatSidenav;
  tab : any = 'tab1';
  constructor(private sideNavService:SideNavService) { }

  ngOnInit() {
   
  }
  changeColor(check){
    // event.srcElement.classList.add("active-color");
    console.log(check);
    if(check==1){
      this.tab = 'tab1';
    }else if(check==2){

      this.tab = 'tab2';
    }else{
      this.tab = 'tab3';
    }    
  }
 

}
