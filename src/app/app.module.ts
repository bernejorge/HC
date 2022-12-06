import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { PrincipalModule } from './pages/principal/principal.module';
import { LoginModule } from './pages/login/login.module';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HcModule } from './pages/hc/hc.module';
import { TokenInterceptorService } from './iterceptors/token-interceptor.service';
import { LoginService } from './services/login.service';
import { PersonasService } from './services/personas.service';
import { CoreModule } from './services/core.module';
import { SpinnerComponent } from './pages/spinner/spinner.component';
import { SpinnerModule } from './pages/spinner/spinner.module';
import { SpinnerInterceptor } from './iterceptors/spinner-interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SesionPermisosGuard } from './guards/sesion-permisos.guard';
import { ValidarRegistroComponent } from './pages/validar-registro/validar-registro.component';

import { ErrorCatchingInterceptor } from './iterceptors/error-catching.interceptor';
import { LoginInicioComponent } from './pages/login-inicio/login-inicio.component';

const appRoutes: Routes = [
  { path: '', redirectTo : 'home2', pathMatch: "full" },
  { path:'home2', component: LoginInicioComponent },
  { path: 'login',  loadChildren:"./pages/login/login.module" },
  { path: 'validar-registro', component: ValidarRegistroComponent},
  { path: 'main', loadChildren: "./pages/hc/hc.module#HcModule", canActivate:[SesionPermisosGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    ValidarRegistroComponent,
    LoginInicioComponent,
    
  ],
  imports: [ 
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PrincipalModule,
    LoginModule,
    HttpClientModule,
    HcModule,
    CoreModule,
    SpinnerModule,
    NgbModule.forRoot(),   

  ],
  exports: [SpinnerComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    {
      provide: LoginService,
      useClass: LoginService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorCatchingInterceptor,
      multi: true,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
