import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from '../login/login.module';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: PrincipalComponent}

];
@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule
  ],
  declarations: [PrincipalComponent],
  exports:[
  	PrincipalComponent,
  ]
  
})
export class PrincipalModule { }
