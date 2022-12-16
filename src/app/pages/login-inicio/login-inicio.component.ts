import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';
import { RegistrarseComponent } from './modales/registrarse/registrarse.component';
import { RegistroExitosoComponent } from './modales/registro-exitoso/registro-exitoso.component';
import { TerminosCondicionesComponent } from './modales/terminos-condiciones/terminos-condiciones.component';

@Component({
	selector: 'app-login-inicio',
	templateUrl: './login-inicio.component.html',
	styleUrls: ['./login-inicio.component.css']
})
export class LoginInicioComponent implements OnInit {

	@ViewChild('content2') modalReg: any;
	@ViewChild('content') modal: any;
	modalRegRef: any;
	loginForm: FormGroup;
	string = "";
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

	openModal() {
		this.modalRegRef = this.modalService.open(RegistrarseComponent);
		this.modalRegRef.result.then((result) => {
			if (result) {

				const doc = result.controls.docnumber.value;
				const nac = new Date(result.controls.nac.value);
				this.regitrarse(doc, nac);
			}
		}, (reason)=>{
			console.log(reason);
		}
		);
	}

	mostrarTerminos(){
		const modalRef = this.modalService.open(TerminosCondicionesComponent, { size: 'lg' });

	}
	regitrarse(doc: string, nac: Date) {
		//definicion del observador
		const RegistrarseObserver = {
			next: (x) => {
				//respuesta de exito
				console.log(x);
				//mostrar mensaje de exito, mostrar modal
				const mail = this.obscure_email(x.Email);
				const modalRef = this.modalService.open(RegistroExitosoComponent)
				modalRef.componentInstance.email = mail.toLowerCase();
				modalRef.result.then((result) => {
					this.router.navigate(['/validar-registro']);

				}, (reason) => {
					console.log(reason);
					this.router.navigate(['/validar-registro']);
				});

				;
			},

		}

		this.loginSrv.registarse("1", doc, nac.toISOString())
			.subscribe(RegistrarseObserver);
	}

	isValidEmail(): boolean {
		return this.loginForm.controls['username'].valid && this.loginForm.controls['username'].touched;
	}

	obscure_email(email) {
		var parts = email.split("@");
		var name = parts[0];
		var result = name.charAt(0);
		for (var i = 1; i < name.length; i++) {
			result += "*";
		}
		result += name.charAt(name.length - 1);
		result += "@";
		var domain = parts[1];
		result += domain.charAt(0);
		var dot = domain.indexOf(".");
		for (var i = 1; i < dot; i++) {
			result += "*";
		}
		result += domain.substring(dot);

		return result;
	}
}
