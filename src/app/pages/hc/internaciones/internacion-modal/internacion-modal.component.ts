import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Epicrisis } from '../../../../Models/Epicrisis';
import { Episodio } from '../../../../Models/Episodio';

@Component({
  selector: 'app-internacion-modal',
  templateUrl: './internacion-modal.component.html',
  styleUrls: ['./internacion-modal.component.css']
})
export class InternacionModalComponent implements OnInit {

  @Input() Epicrisises : Epicrisis[];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
