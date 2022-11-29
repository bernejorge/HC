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

  login(username: string, password: string ): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
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
