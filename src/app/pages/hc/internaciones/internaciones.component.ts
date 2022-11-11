import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../../services/personas.service';

@Component({
  selector: 'app-internaciones',
  templateUrl: './internaciones.component.html',
  styleUrls: ['./internaciones.component.css']
})
export class InternacionesComponent implements OnInit {

  constructor(private personaSrv: PersonasService) { 

  }

  ngOnInit() {
    this.personaSrv.obtenerEpisodios()
      .subscribe((res)=>{
        console.log(res);
      });
  }

}
