import { Mensaje } from "./Mensaje";
import { Problema } from "./Problema";

export interface RespuestaProblemas {
    Problemas:    Problema[];
    Codigo:       number;
    Mensaje:      string;
    IdRequest:    string;
    Exito:        boolean;
    Mensajes:     Mensaje[];
    HasException: boolean;
}