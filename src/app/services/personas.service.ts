import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Persona } from '../Models/Persona';
import { LoginService } from './login.service';

@Injectable()
export class PersonasService {
  
  public personasACargo ?: Persona[];
  private personaSeleccionada = new Subject<Persona>();
  private relaciones = new Subject<Persona[]>();
  private pSeleccionada : Persona;
  public $personaSeleccionadaObs = this.personaSeleccionada.asObservable();
  public $relacionesObs = this.relaciones.asObservable();

  constructor(private http: HttpClient, private loginService: LoginService) { }

  async obtenerRelaciones(): Promise<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
    };
    let body = ``;
    let r: Persona[];
     await this.http.get(`${environment.API_URL}/api/Portal/ObtenerRelaciones`, httpOptions)
      .toPromise().then(
        (res:any) =>{          
          r = res.Personas;          
          this.personasACargo = r;
         
          this.personaSeleccionada.next(this.personasACargo[0]);
          this.relaciones.next(this.personasACargo);
          this.pSeleccionada= this.personasACargo[0];
        });  

    return this.personasACargo;
  }

  cambiarPersona(person: Persona){
    //notificamos a todos los observadores que se selecciono otra persona a cargo
    this.personaSeleccionada.next(person);
    this.pSeleccionada= person;
  }
  reload(){
    this.relaciones.next(this.personasACargo);
  }

  obtenerInformes():Observable<any>{
    let params = new HttpParams();
    params = params.append('idPersona',this.pSeleccionada.Id.toString());
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }),
      params: params,
    };
    
    //http://innova.1704.dev.tipsalud.local/Asistencial/LogisticaDePaciente/IntegracionPortalApi/api/Portal/ObtenerInformesPorIdPersona?idPersona=938938
    let body = `idPersona=${this.pSeleccionada.Id}`;
    return this.http.get(`${environment.API_URL}/api/Portal/ObtenerInformesPorIdPersona`,httpOptions)
    
    
  }
}
