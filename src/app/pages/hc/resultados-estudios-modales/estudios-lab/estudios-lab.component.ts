import { Component, Input, OnInit } from '@angular/core';
import { Informe } from '../../../../Models/Informe';

@Component({
  selector: 'app-estudios-lab',
  templateUrl: './estudios-lab.component.html',
  styleUrls: ['./estudios-lab.component.css']
})
export class EstudiosLabComponent implements OnInit {

  @Input() estudio : Informe;
  constructor() { 
    
  }

  ngOnInit() {
    console.log("estudios-lab.component " );
  }

}
