import { Component, OnInit, NgModule } from '@angular/core';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { ToolbaarComponent } from '../toolbaar/toolbaar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavContent } from '@angular/material';

@NgModule({
  declarations:[
    SidenavbarComponent,
    ToolbaarComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatSidenavContent
  ],
  exports:[
    SidenavbarComponent,
    ToolbaarComponent
  ]

})

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
