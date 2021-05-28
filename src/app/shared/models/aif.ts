/*modelo básico de auto de infracao*/

export interface AutoDeInfracao{
    id?:number;
    cod:number;
    hora:string;
    fiscal:string;
    autuado:string;
    motivo:string;
    legal:string;
}