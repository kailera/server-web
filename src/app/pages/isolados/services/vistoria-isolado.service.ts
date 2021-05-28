import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, shareReplay } from 'rxjs/operators';
import { Isolado } from 'src/app/shared/models/isolado';
import { VistoriaIsolado } from 'src/app/shared/models/vistoriaisolado';


const url = 'http://localhost:3000/vistoria-isolado/';

@Injectable({
  providedIn: 'root'
})
export class VistoriaIsoladoService {

  constructor(private httpclient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  saveVistoriaIsolado (vistoria: VistoriaIsolado):Observable<VistoriaIsolado>{
    return this.httpclient.post<VistoriaIsolado>(url, JSON.stringify(vistoria), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError),
        shareReplay(1)
      )    
  }

  private handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
    // client-side error
  
      errorMessage = error.error.message;
    }else{
      errorMessage = `Código do erro: ${error.status}, mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  
}

