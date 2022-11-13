export interface IPrescripcion {
    Id:                    number;
    Fecha:                 Date;
    TratamientoProlongado: boolean;
    Vencimiento:           Date;
    Dias:                  number;
    Nombre:                string;
    IndicacionMedica:      string;
    EstadoPrescripcion:    string;
    FechaMostrar:          Date;
    Problema:              string;
    obtenerClass(): string;
}

export class Prescripcion implements IPrescripcion {
   
    Id: number;
    Fecha: Date;
    TratamientoProlongado: boolean;
    Vencimiento: Date;
    Dias: number;
    Nombre: string;
    IndicacionMedica: string;
    EstadoPrescripcion: string;
    FechaMostrar: Date;
    Problema: string;
    
    public obtenerClass(): string {
        if(this.IndicacionMedica == 'ACTIVA')
        {
            if(this.EstadoPrescripcion == 'VENCIDO'){
                //activo y vencido
                return 'estadoPrescripcion--vencido';
            }else return 'estadoPrescripcion--activo';
        }
        else {
            if (this.IndicacionMedica == 'FINALIZADA'){
                return 'estadoPrescripcion--finalizado';
            } else if(this.IndicacionMedica == 'SUSPENDIDO'){
                return 'estadoPrescripcion--inactivo';
            }else{
                return 'estadoPrescripcion--indefinido';;
            }
        }
    
        // if($indicacionMedica == 'ACTIVA'){
        //     if($estadoPrescripcion == 'VENCIDO'){
        //                             <td class="estatusBolita" title="Estado del medicamento en Sistema: ACTIVO -> VENCIDO"><img src="assets/images/estadomed/vencido.png">
        //                                 <span style="display:none;">Activo</span>
        //                             </td>
        //                     </tr>';
        //     } else {
        
        //                         <td class="estatusBolita" title="Estado del medicamento en Sistema: ACTIVO"><img src="assets/images/estadomed/activo.png">
        //                             <span style="display:none;">Activo</span>
        //                         </td>
        //     };
        // } else if ($soloActivos != true){
        //     $i++;
        //     if ($indicacionMedica == 'FINALIZADA'){
        //         $contenidoConsultas .= '
        //                         <td class="estatusBolita" title="Estado del medicamento en Sistema: FINALIZADO"><img src="assets/images/estadomed/finalizado.png">
        //                         <span style="display:none;">Finalizado</span>
        //                         </td>
        //                 </tr>';
        //     } else if ($indicacionMedica == 'SUSPENDIDO'){
        //                         <td class="estatusBolita" title="Estado del medicamento en Sistema: SUSPENDIDO"><img src="assets/images/estadomed/suspendido.png">
        //                             <span style="display:none;">Finalizado</span>
        //                         </td>
        //                 </tr>';
        //     } else {
        //                         <td class="estatusBolita" title="Estado del medicamento en Sistema: SIN REGISTRO">-
        //                             <span style="display:none;">Finalizado</span>
        //                         </td>
        //                 </tr>';
        //     };
        // }
    }

}

