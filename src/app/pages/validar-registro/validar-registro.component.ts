import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-validar-registro',
  templateUrl: './validar-registro.component.html',
  styleUrls: ['./validar-registro.component.css']
})
export class ValidarRegistroComponent implements OnInit {

  cForm: FormGroup;
  

  constructor(private loginSrv: LoginService, private fb: FormBuilder) { 
    this.cForm = this.fb.group(
      {
        digito1: ['2', Validators.compose([Validators.required, Validators.maxLength(1)])],
        digito2: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
        digito3: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
        digito4: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
        digito5: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
        digito6: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
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
          }
        );
      }else{  
        //mensaje de validacion de datos ingresados
      }

  }

  validarInputs():boolean{

    return true;
  }

}
