import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Subscription } from 'rxjs';
import { SignosVitales } from '../../../Models/SignosVitales';
import { PersonasService } from '../../../services/personas.service';
import { SpinnerService } from '../../../services/spinner.service';


@Component({
  selector: 'app-resumen-clinico',
  templateUrl: './resumen-clinico.component.html',
  styleUrls: ['./resumen-clinico.component.css']
})
export class ResumenClinicoComponent implements OnInit {

  signos?: SignosVitales[];
  suscripcion: Subscription;
  serieSistolica?: any[];
  serieDiastolica?: any[];
  serieFrqCardiaca?: number[];
  chart: Chart;
  categorias: string[];

  constructor(private personaSrv: PersonasService, public datepipe: DatePipe) { }

  ngOnInit() {
    this.suscripcion = this.personaSrv.$personaSeleccionadaObs
      .subscribe((res) => {
        if (res)
          this.getData()
      });
  }
  getData() {
    this.personaSrv.obtenerSignosVitales()
      .subscribe(res => {
        console.log(res);
        this.signos = res.SignosVitales.slice(-100)
          .sort ( (a, b) => {
            return new Date(a.Fecha).getTime() - new Date(b.Fecha).getTime();
      });; //res.Problemas.map(x=> Object.assign(new Problema(),x));
        this.serieDiastolica = this.signos.map(x => [new Date(x.Fecha).getTime(), x.FrecuenciaDiastolica] );
        this.serieSistolica = this.signos.map(x =>  [new Date(x.Fecha).getTime(), x.FrecuenciaSistolica]);
        //this.serieFrqCardiaca = this.signos.map(x =>  [ x.Fecha, x.FrecuenciaDiastolica]);
        this.categorias = this.signos.map(x => this.datepipe.transform(x.Fecha, 'MMM-yy'));

        this.chart = new Chart({
          lang: {
            downloadJPEG: 'Descargar gráfico en JPG',
            downloadPNG: 'Descargar gráfico en PNG',
            downloadPDF: 'Descargar gráfico en PDF',
            downloadSVG: 'Gráfico vectorizado SVG',
            printChart: 'Imprimir gráfico',
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            shortMonths: [ "Ene" , "Feb" , "Mar" , "Abr" , "May" , "Jun" , "Jul" , "Ago" , "Sep" , "Oct" , "Nov" , "Dic"],
            weekdays: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
            resetZoom: 'Grafico completo',
        },
          chart: {
            type: 'line'
          },
          title: {
            text: 'Linechart'
          },
          xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
              millisecond: '%H:%M:%S.%L',
              second: '%H:%M:%S',
              minute: '%H:%M',
              hour: '%H:%M',
              day: '%e. %b',
              week: '%e. %b',
              month: '%b \'%y',
              year: '%Y'
            },
            title: {
              text: 'Fecha de medición',
              style: {
                color: '#ccc',
                fontWeight: 'normal',
                fontSize: '10px',
              },
            }
          },
          credits: {
            enabled: false
          },
          tooltip: {
            xDateFormat: '%d-%m-%Y %H:%M:%S',
            crosshairs: {color: '#cccccc', dashStyle: 'shortdot'},
            shared: true,
            useHTML: true,
            headerFormat: '<small>{point.key}</small><table>',
            pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
            '<td style="text-align: right"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            
            dateTimeLabelFormats: {
                      week: 'Semana de %d-%m-%Y'
                   }
                },
          series: [
            {
              name: 'Sistolica',
              data: this.serieSistolica,
            },
            {
              name: 'Diastolica',
              data: this.serieDiastolica
            }
          ]
        });
      });
  }



  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

}
