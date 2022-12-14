import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-validar-registro',
  templateUrl: './validar-registro.component.html',
  styleUrls: ['./validar-registro.component.css']
})
export class ValidarRegistroComponent implements OnInit {

  cForm: FormGroup;
  

  constructor(private loginSrv: LoginService, private fb: FormBuilder, private router: Router) { 
    this.cForm = this.fb.group(
      {
        digito1: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
        digito2: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
        digito3: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
        digito4: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
        digito5: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
        // digito6: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
      }
    );
  }

  ngOnInit() {
  }

  validacionDeCodigo() {
      if(this.validarInputs()){
        //consumir servicio
        let stringCode='';
        for (const field in this.cForm.controls) { // 'field' is a string
          console.log(this.cForm.controls[field].value);
          stringCode = stringCode+this.cForm.controls[field].value;
        }
        const codigo = Number(stringCode);
        this.loginSrv.validarCodigo(codigo).subscribe(
          (res)=>{
            //codigo respuesta exitosa
            console.log(res);
            this.showAlert();
            //this.router.navigate(['/generar-password']);
          }
        );
      }else{  
        //mensaje de validacion de datos ingresados
      }

  }

  validarInputs():boolean{

    return true;
  }
  showAlert() {
    Swal({
     title: 'Valdacion Exitosa',
     text: 'Ha realizado la validación de manera correcta.',
     type: 'success',
    }).then((result) => {
      // redirectTo Login
      this.router.navigate(['/generar-password']);
    })
  }

}
