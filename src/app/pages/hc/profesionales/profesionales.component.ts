import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../../services/personas.service';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent implements OnInit {

  constructor(private personaSrv: PersonasService ) { }

  ngOnInit() {
    this.personaSrv.obtenerProfesionalesVisitados()
      .subscribe((res)=>{
        console.log(res);
      })
  }

}
