import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Informe } from '../../../Models/Informe';

@Component({
  selector: 'app-resultados-estudios-modal',
  templateUrl: './resultados-estudios-modal.component.html',
  styleUrls: ['./resultados-estudios-modal.component.css']
})
export class ResultadosEstudiosModalComponent implements OnInit {
  @Input() estudio : Informe;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
