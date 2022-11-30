import { Component, Input, OnInit } from '@angular/core';
import { Informe } from '../../../../Models/Informe';

@Component({
  selector: 'app-estudios-imgen',
  templateUrl: './estudios-imgen.component.html',
  styleUrls: ['./estudios-imgen.component.css']
})
export class EstudiosImgenComponent implements OnInit {
  @Input() estudio : Informe;
  constructor() { }

  ngOnInit() {
  }

}
