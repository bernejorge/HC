import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Problema } from '../../../Models/Problema';
import { PersonasService } from '../../../services/personas.service';

@Component({
  selector: 'app-motivo-consulta',
  templateUrl: './motivo-consulta.component.html',
  styleUrls: ['./motivo-consulta.component.css']
})
export class MotivoConsultaComponent implements OnInit, OnDestroy {

  public problemas?: Problema[];
  private suscripcion: Subscription;
  constructor(private personaSrv: PersonasService) { }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngOnInit() {

    this.getData();
    this.suscripcion = this.personaSrv.$personaSeleccionadaObs.subscribe(
      ()=>this.getData()
    );
  }

  getData() { 
    this.personaSrv.obtenerProblemas()
      .subscribe(res=>{
        console.log(res);
        this.problemas = res.Problemas;
      });
  }
 
}
