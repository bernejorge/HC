import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Problema, ProblemaInterface } from '../../../Models/Problema';
import { PersonasService } from '../../../services/personas.service';

@Component({
  selector: 'app-motivo-consulta',
  templateUrl: './motivo-consulta.component.html',
  styleUrls: ['./motivo-consulta.component.css']
})
export class MotivoConsultaComponent implements OnInit, OnDestroy {

  public problemas?: ProblemaInterface[];
  public problemasFiltrados?: ProblemaInterface[];
  public nombreProblema :any;
  private suscripcion: Subscription;
  constructor(private personaSrv: PersonasService) { }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngOnInit() {
    this.suscripcion = this.personaSrv.$personaSeleccionadaObs.subscribe(
      ()=>this.getData()
    );
  }

  getData() { 
    this.personaSrv.obtenerProblemas()
      .subscribe(res=>{
        console.log(res);
        this.problemas = res.Problemas;
        this.problemasFiltrados = res.Problemas;
      });
  }
  validateDate(d:string) {
    if (d ==="0001-01-01T00:00:00"){
      return "";
    }else{
      return d;
    }
  }
//    Filtrar<Type extends Problema>(arg: Type[], filtro: string): Type[] {
//     if (filtro == "") {
//         return arg;
//     } else {
//         let result = arg.filter(
//             (x:Type) => {
//                 return x.getDataToFilter().toLowerCase().match(filtro.toLowerCase())
//             }            
//         );
//         return result;
//     }
// }
  buscar(){
 
    if(this.nombreProblema ==""){
      return this.problemasFiltrados = this.problemas;
    }
    else{
      this.problemasFiltrados = this.problemas.filter(
        (p)=> {
          return p.Problema.toLowerCase().match(this.nombreProblema.toLowerCase())
        }
      );
    }
   }
 
}
