import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public isCollapsed = true;
  href: string;
  subscription: Subscription;
  browserRefresh =false;
  constructor(private menuSrv: MenuService, private router: Router) {
    menuSrv.$menuObservable.subscribe(
      {
        next: (state: boolean) => this.setState(state),
      }
    )

   
  }
  ngOnInit() {
    this.href = this.router.url;
    switch (this.href) {
      case "motivo-consulta":
        this.select(1);
        break;
    
      case "profesionales":
        this.select(2);
        break;
      
      case "resultados":
        this.select(3);
        break;
      
      case "medicamentos":
        this.select(4);
        break;
      
      case "internaciones":
        this.select(5);
        break;

      default:
        this.select(0);
        break;
    }
  }

  setState(s: boolean) {
    this.isCollapsed = s;
  }

  clicked = 0;

  select(i) {
    this.clicked = i;
  }

  onMenuClick(){
    console.log("Click en el menu toggle!");
    this.menuSrv.menuToggle();
  }
}
