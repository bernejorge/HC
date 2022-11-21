import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Informe } from '../../../../Models/Informe';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() estudio : Informe;
  constructor(public activeModal: NgbActiveModal) { 
    
  }


  ngOnInit() {
    
  }

}
