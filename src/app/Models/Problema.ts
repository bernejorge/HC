import { BaseModel } from "./BaseModel";

export interface ProblemaInterface {
    Problema:             string;
    FechaAltaProblema:    Date;
    ProblemaTipoEstado:   string;
    Medico:               string;
    MedicoServicio:       string;
    FechaUltimaEvolucion: Date;
    ResaltarEnHCE:        boolean;
}

export class Problema implements ProblemaInterface, BaseModel {
    getDataToFilter(): string {
        return this.Problema;
    }
   
    Problema: string;
    FechaAltaProblema: Date;
    ProblemaTipoEstado: string;
    Medico: string;
    MedicoServicio: string;
    FechaUltimaEvolucion: Date;
    ResaltarEnHCE: boolean;

}