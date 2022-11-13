export interface Informe {
    NombrePlantilla:     string;
    Estudio:             string;
    Nasector:            string;
    FechaRealizacion:    Date;
    Id:                  number;
    ClaveInforme:        number;
    Id_Rec_realiza:      number;
    Id_rec_Firma:        number;
    IdPersona:           number;
    ClaveUnica:          number;
    Mostrar:             string;
    IdPlantilla:         number;
    EstadoDescripcion:   string;
    OrdenLaboratorio:    number;
    HoraEstudio:         number;
    HoraNormalizada:     string;
    TieneImagenDigital:  boolean;
    InformeCritico:      number;
    InformeCriticoLeido: number;
    TipoInforme:         string;
    NombrePersona:       string;
    NombreInforme:       string;
    Sexo:                string;
    Edad:                string;
    Laboratorio:         Laboratorio[];
    Imagen:              Imagen[];
    Otro:                Laboratorio[];
}

export interface Imagen {
    DeterminacionNombre: string;
    Valor:               string;
    Referencia:          string;
    Modalidad:           string;
}

export interface Laboratorio {
    Descripcion:        string;
    Valor:              string;
    ReferenciaCompleta: string;
    AnalisisNombre:     string;
    Etiqueta:           string;
    Unidad:             string;
    ValorNormal:        string;
}