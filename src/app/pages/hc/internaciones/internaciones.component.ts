import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Base } from '../../../Models/BaseModel';
import { Episodio, EpisodioInterface } from '../../../Models/Episodio';
import { PersonasService } from '../../../services/personas.service';
import { InternacionModalComponent } from './internacion-modal/internacion-modal.component';

@Component({
  selector: 'app-internaciones',
  templateUrl: './internaciones.component.html',
  styleUrls: ['./internaciones.component.css']
})
export class InternacionesComponent implements OnInit, OnDestroy{

  p: number = 1;
  cantidad: number = 10;
  suscripcion: Subscription;
  episodiosFiltrados?: Episodio[];
  constructor(private personaSrv: PersonasService, private modalService: NgbModal ) { 

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

  openModal(episodio: EpisodioInterface){
    this.personaSrv.obtenerEpicrisisPorIdEpisodio(episodio.Id)
      .subscribe((res)=>{
        if(res.Epicrisis){
          const modalRef = this.modalService.open(InternacionModalComponent, {size: 'lg'});
          modalRef.componentInstance.modal.Epicrisises = res.Epicrisis;
        }
      }
      );
    

  }

  key: string= 'FechaAltaProblema';
  reverse:boolean = false;
  sort(key){
   this.key =key;
   this.reverse = !this.reverse;
  }
} 
