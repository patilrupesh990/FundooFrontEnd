import { Component, OnInit,ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SideNavService } from 'src/app/services/sidenavservice.service';
@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {
  @ViewChild('sidenav',{ static: true }) public sidenav: MatSidenav;

  constructor(private sideNavService:SideNavService) { }

  ngOnInit() {
    this.sideNavService.sideNavToggleSubject.subscribe(()=> {
      this.sidenav.toggle();
    });
  }

}
