import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { PersonasService } from '../../services/personas.service';


@Component({
	selector: 'app-login',
	providers: [LoginService],
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	
	loginForm = this.fb.group({
		username: [''],
		password: [''],
	  });
	public show = false;
	public mymodalIsOpen:boolean = false;

	constructor(private loginSrv : LoginService, private router:Router,  private fb: FormBuilder, private personaSrv: PersonasService)  {
		
	}

	ngOnInit() {
	}

	showLogin() {
		this.show = true;

	}
	openLogin(value: boolean) {
		console.log("Clickeado");
		this.mymodalIsOpen = value;
		console.log("State = " + this.mymodalIsOpen)
		
	}
	
	ingresar() {
		//definicion del observador
		const LoginObserver={
			next:(x)=> {
				console.log(x);
				this.personaSrv.obtenerRelaciones();
				this.router.navigate(['/main']);
			},
			error:(x)=>{
				console.error(x);
				window.alert("Error: " + x.message);				 
			}
			
		}
		console.log(this.loginForm.controls.username.value);
		this.loginSrv.login(this.loginForm.controls.username.value, 
							this.loginForm.controls.password.value)
			.subscribe(LoginObserver);
		this.mymodalIsOpen=false;
	}


}
