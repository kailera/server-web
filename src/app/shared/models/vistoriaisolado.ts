import { Isolado } from "./isolado";

export interface VistoriaIsolado {
	id?: number,
	_idisolado:number;
	date: string,
	isolated: string,
	isHome:boolean,
	isResidentsInHome: boolean,
	report: string,
	requestHelp: boolean,	
}