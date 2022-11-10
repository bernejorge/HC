import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../../services/personas.service';

@Component({
  selector: 'app-resultados-estudios',
  templateUrl: './resultados-estudios.component.html',
  styleUrls: ['./resultados-estudios.component.css']
})
export class ResultadosEstudiosComponent implements OnInit {

  constructor(private PersonaSrv: PersonasService) { }

  ngOnInit() {
    this.PersonaSrv.obtenerInformes()
      .subscribe((res) => {
        console.log(res);
    })
  }

}
