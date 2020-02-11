import { Component, OnInit, NgModule } from '@angular/core';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavContent } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations:[
    SidenavbarComponent,
    ToolbarComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatSidenavContent
  ],
  exports:[
    SidenavbarComponent,
    ToolbarComponent
  ]

})

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
   opened:boolean;
  
  public opened2 = '';
  constructor() { }
  
  nameEventHander($event: any) {
   
    this.opened2 = $event;
    console.log("2",this.opened2);
  }

  ngOnInit() {
    
  }

}
