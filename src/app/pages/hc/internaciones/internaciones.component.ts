import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Base } from '../../../Models/BaseModel';
import { Episodio } from '../../../Models/Episodio';
import { PersonasService } from '../../../services/personas.service';

@Component({
  selector: 'app-internaciones',
  templateUrl: './internaciones.component.html',
  styleUrls: ['./internaciones.component.css']
})
export class InternacionesComponent implements OnInit, OnDestroy{

  suscripcion: Subscription;
  episodiosFiltrados?: Episodio[];
  constructor(private personaSrv: PersonasService) { 

  }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngOnInit() {
    this.suscripcion = this.personaSrv.$personaSeleccionadaObs
      .subscribe((res)=>{
        if (res)
        this.getData()});
  }

  getData(){
    this.personaSrv.obtenerEpisodios()
      .subscribe((res)=>{
        console.log(res);
        this.episodiosFiltrados = res.Episodios.map(x=> Object.assign(new Episodio(), x));
      });
  }

  validateDate(date:string):string {
    return Base.validateDate(date);
  }

} 
