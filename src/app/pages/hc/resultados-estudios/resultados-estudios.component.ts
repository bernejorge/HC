import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Informe } from '../../../Models/Informe';
import { PersonasService } from '../../../services/personas.service';

@Component({
  selector: 'app-resultados-estudios',
  templateUrl: './resultados-estudios.component.html',
  styleUrls: ['./resultados-estudios.component.css']
})
export class ResultadosEstudiosComponent implements OnInit, OnDestroy {

  informes?: Informe[];
  suscripcion : Subscription;

  constructor(private PersonaSrv: PersonasService) { }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngOnInit() {
    this.suscripcion = this.PersonaSrv.$personaSeleccionadaObs
      .subscribe(()=>this.getData());
  }

  getData(){
    this.PersonaSrv.obtenerInformes()
      .subscribe((res) => {
        console.log(res);
        this.informes = res.Informes;
    })
  }

}
