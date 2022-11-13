export interface Episodio {
    Id:                   number;
    FechaIngreso:         Date;
    MotivoInternacion:    string;
    FechaDeAltaAdm:       Date;
    IdServicio:           number;
    IdCentroAtencion:     number;
    NombreServicio:       string;
    NombreCentroAtencion: string;
    IdEgresoMotivo:       number;
    IdPersona:            number;
    Sector:               string;
    TieneEpicrisis:       boolean;
    Estado:               string;
}