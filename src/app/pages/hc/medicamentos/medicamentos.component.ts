import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../../services/personas.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit {

  constructor(private personaSrv: PersonasService) { }

  ngOnInit() {
    this.personaSrv.obtenerMediacion()
      .subscribe((res)=>{
          console.log(res);
      });
  }

}
