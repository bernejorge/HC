import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public isCollapsed = true;
  constructor(private menuSrv: MenuService) { 
    menuSrv.$menuObservable.subscribe(
      {
        next: (state:boolean) => this.setState(state),
      }
    )
  }

  setState(s: boolean) {
    this.isCollapsed =s;
  }

  ngOnInit() {
  }

}
