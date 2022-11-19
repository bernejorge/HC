import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Base } from '../../../Models/BaseModel';
import { Informe } from '../../../Models/Informe';
import { PersonasService } from '../../../services/personas.service';
import { LoginComponent } from '../../login/login.component';
import { ResultadosEstudiosModalComponent } from '../resultados-estudios-modal/resultados-estudios-modal.component';

@Component({
  selector: 'app-resultados-estudios',
  templateUrl: './resultados-estudios.component.html',
  styleUrls: ['./resultados-estudios.component.css']
})
export class ResultadosEstudiosComponent implements OnInit, OnDestroy {

  informes?: Informe[];
  informesFiltrados?: Informe[];
  suscripcion : Subscription;
  strBuscar: string;
  constructor(private PersonaSrv: PersonasService,private modalService: NgbModal) { 

  }

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
        this.informes = res.Informes.map(x=> Object.assign(new Informe(), x));
        this.informesFiltrados =  this.informes;
    })
  }

  buscar() {    
    this.informesFiltrados = Base.Filtrar(this.informes, this.strBuscar);
  }
  
  openModal(inf: Informe){
    let informeCompleto: Informe;
    this.PersonaSrv.obtenerInformesPorId(inf.Id)
      .subscribe((res)=>{
        if(res.Informes){
          informeCompleto = res.Informes.map(x=> Object.assign(new Informe(), x))[0];
          const modalRef = this.modalService.open(ResultadosEstudiosModalComponent, { size: 'lg' });
          modalRef.componentInstance.estudio = informeCompleto;
        }
      }
      )
    console.log(inf.Id, + "  " + inf.Estudio);

  }

}
