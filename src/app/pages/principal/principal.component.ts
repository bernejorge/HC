import { Component, OnInit } from '@angular/core';
import { LoginComponent} from '../login/login.component';
   

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  openModal():void {
    console.log("Botoncito clicked");
  }
  
}
