import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';



@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

    constructor(private modalService: NgbModal) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("ErrorCatchingInterceptor!!!")
        return next.handle(request)
        .pipe()
        .catch((err: HttpErrorResponse) => { 
            console.log('Caught error', err);
            if(err.error){
                let obj = JSON.parse(err.error.Message);
                this.showAlert(obj.Message);
            }else{
                this.showAlert('Ha ocurrido un error inesperado. Intente de nuevo mas tarde');
            }
            
            return Observable.throw(err);
          });
    }

    showAlert(m : string) {
       Swal({
        title: 'Error',
        text: m,
        type: 'error'
       })
    }
}