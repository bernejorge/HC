import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { User } from '../Models/User';

@Injectable()
export class LoginService {
  public loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  prueba(){
    window.alert("hola");
  }
getHttpHeaders(): HttpHeaders {
  return  new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    });   
  
   
}
  login(username: string, password: string ): Observable<any> {
    let httpOptions = {
      headers: this.getHttpHeaders(),
    };
    let body = `Usuario=${username}&Password=${password}&LoginUnico=true&IdTipoVinculo=2&ClientToken=333`;
    return this.http.post(`${environment.API_URL}/api/Sesion/Login`, body, httpOptions)
      .pipe(
        map((res: User) => {
          console.log('Res:= ', res);
          //saveToken
          this.saveToken(res.AccessToken);
          this.loggedIn.next(true);
          return res;
        })
      );
  }
  public registarse(tipoDocumento: string, documento: string, nacimiento: string): Observable<any> {

    const urlReg="http://localhost:4200/validar-registro"
    let httpOptions = {
      headers: this.getHttpHeaders(),
    };
    let body = `Documento=${documento}&TipoDocumento=${tipoDocumento}&FechaNacimiento=${nacimiento}&Url=${urlReg}`;
    return this.http.post(`${environment.API_URL}/api/Sesion/ValidarAlta`, body, httpOptions)
      .pipe(
        map((res:any)=>{
            console.log(res);
            if(res.Email){
              localStorage.setItem('emailAValidar',res.Email);
            } 
          }
        )
      );
   }

  public validarCodigo(codigo: number){
    // /api/Sesion/ValidarCodigoTemporal
    let mail = localStorage.getItem('emailAValidar');
    if(mail==null){
      mail="";
    }

    let httpOptions = {
      headers: this.getHttpHeaders(),
    };
    let body = `Codigo=${codigo}&Email=${mail}`;
    return this.http.post(`${environment.API_URL}/api/Sesion/ValidarCodigoTemporal`, body, httpOptions);
   }
  
  private saveToken(token: string): void {
    localStorage.setItem('AccessToken', token);
    localStorage.setItem('LastVisit', new Date().getTime().toString());    
  }
  public getToken(): string | null {
    return localStorage.getItem('AccessToken');
  }

  public logout(): void {
    localStorage.removeItem('AccessToken');
    localStorage.removeItem('LastVisit');
    //Todo: llamar al metodo logout del backend
  }
  public isLoggedIn():boolean {
    let lastV = localStorage.getItem('LastVisit');
    if (this.getToken() && lastV){
      try {
        const dateDiff = new Date().getTime() - Number(lastV); 
        const tolerenciaMinutos =  10 * 1000 * 60; // 10 minutes
        return dateDiff < tolerenciaMinutos;
      } catch (error) {
        return false
      }      
    }else return false;
  }



}
