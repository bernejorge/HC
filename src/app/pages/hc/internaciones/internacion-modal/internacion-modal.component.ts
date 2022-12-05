import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {  EpicrisisClass } from '../../../../Models/Epicrisis';
import { Episodio } from '../../../../Models/Episodio';
import { RespuestaEpicrisis } from '../../../../Models/RespuestasInterfaces';

@Component({
  selector: 'app-internacion-modal',
  templateUrl: './internacion-modal.component.html',
  styleUrls: ['./internacion-modal.component.css']
})
export class InternacionModalComponent implements OnInit {

  @Input() Epicrisises : EpicrisisClass[];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
