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

const appRoutes: Routes = [
  { path: '', redirectTo : 'home', pathMatch: "full" },
  { path: 'home', loadChildren: "./pages/principal/principal.module#PrincipalModule" },
  { path: 'login',  loadChildren:"./pages/login/login.module" },
  { path: 'main', loadChildren: "./pages/hc/hc.module#HcModule", canActivate:[SesionPermisosGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
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
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
