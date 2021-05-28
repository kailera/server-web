export interface Isolado{
    id?:string,
    dataregistro:string,
    nomeisolado: string,
    contatosisolado: string[];
    enderecoisolado:string,
    numeroenderecoisolado:string;
    datainicioisolamento:string;
    datafimisolamento:string;  
    visitado:boolean; 
}