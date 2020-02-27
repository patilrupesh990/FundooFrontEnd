import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SideNavService } from 'src/app/services/sidenavservice.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter<boolean>();
  opened:boolean=false;

  constructor(private sideNavService: SideNavService) {
  }
  
  ontoggel(input:any){
    console.log("1"+input);
    this.toggleEvent.emit(input);
    console.log(input);
    this.opened=!this.opened;
  }

  ngOnInit() {
  }
  
  

}
