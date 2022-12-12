import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-login-inicio',
	templateUrl: './login-inicio.component.html',
	styleUrls: ['./login-inicio.component.css']
})
export class LoginInicioComponent implements OnInit {

	@ViewChild('succesReg') modalReg:any;
	loginForm: FormGroup;
	resgistrationForm = this.fb.group({
		docnumber: [''],
		nac: [''],
	});
	aceptaTerminos = false;
	constructor(private fb: FormBuilder, private modalService: NgbModal, private loginSrv: LoginService, private router: Router) { 
		this.loginForm = this.fb.group({
			username: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
			password: [''],
		});
	}

	ngOnInit() {
		
	}
	ingresar() {
		//definicion del observador
		const LoginObserver = {
			next: (x) => {
				console.log(x);
				//this.activeModal.close();
				this.router.navigate(['/main']);
			},
			// error: (x) => {
			// 	console.error(x);
			// 	window.alert("Error: " + x.message);
			// }

		}
		console.log(this.loginForm.controls.username.value);
		this.loginSrv.login(this.loginForm.controls.username.value,
			this.loginForm.controls.password.value)
			.subscribe(LoginObserver);
		//this.mymodalIsOpen=false;
	}

	openModalRegistrarse(){
		
	}
	regitrarse() {
		//definicion del observador
		const RegistrarseObserver = {
			next: (x) => {
				//respuesta de exito
				console.log(x);
				//mostrar mensaje de exito
				this.router.navigate(['/validar-registro']);
			},

		}
		const doc = this.resgistrationForm.controls.docnumber.value;
		const nac = new Date(this.resgistrationForm.controls.nac.value);
		this.loginSrv.registarse("1", doc, nac.toISOString())
			.subscribe(RegistrarseObserver);
	}

	isValidEmail():boolean  {
		return this.loginForm.controls['username'].valid && this.loginForm.controls['username'].touched;
	}
}
