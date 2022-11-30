import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Informe } from '../../../../Models/Informe';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() estudio : Informe;
  titulo: string = '';
  constructor(public activeModal: NgbActiveModal) { 
    
  }


  ngOnInit() {
    if (this.estudio){
      if(this.estudio.NombrePlantilla!==null && this.estudio.NombrePlantilla !== ''){
        this.titulo= this.estudio.NombrePlantilla;
      } else if(this.estudio!==null){
        this.titulo= this.estudio.Estudio;
      }else{
        this.titulo= "";
      }
    }
  }
  addTituloHijo(subTitulo: string){
    this.titulo= this.titulo + " " + subTitulo;
  }

}
