import { Component, OnInit } from '@angular/core';
import { Problema } from '../../../Models/Problema';
import { PersonasService } from '../../../services/personas.service';

@Component({
  selector: 'app-motivo-consulta',
  templateUrl: './motivo-consulta.component.html',
  styleUrls: ['./motivo-consulta.component.css']
})
export class MotivoConsultaComponent implements OnInit {

  public problemas?: Problema[];
  constructor(private personaSrv: PersonasService) { }

  ngOnInit() {

    this.getData();
    this.personaSrv.$personaSeleccionadaObs.subscribe(
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
