import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent} from '../login/login.component';
   

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal():void {
    console.log("Botoncito clicked");
    const modalRef = this.modalService.open(LoginComponent);
    
  }
  
}
