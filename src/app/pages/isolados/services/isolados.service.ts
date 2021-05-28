import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, } from 'rxjs';
import { retry, catchError, shareReplay } from 'rxjs/operators';
import { Isolado } from '../../../shared/models/isolado';


const  url = 'http://localhost:3000/isolados/';

@Injectable({
  providedIn: 'root'
})
export class IsoladoService {

 

  constructor(private httpclient: HttpClient) { }

// headers

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getIsolados(): Observable<Isolado[]>{
    return this.httpclient.get<Isolado[]>(url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  
  //pega o isolado pelo id
  
  getIsoladoById(id: number): Observable<Isolado>{
    return this.httpclient.get<Isolado>(url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveIsolado (isolado: Isolado):Observable<Isolado>{
    return this.httpclient.post<Isolado>(url, JSON.stringify(isolado), this.httpOptions)      
  }

  updateIsolado(isolado:Isolado): Observable<Isolado>{
    return this.httpclient.put<Isolado>(url + '/' + isolado.id, JSON.stringify(isolado), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteIsolado(isolado: Isolado){
    return this.httpclient.delete<Isolado> (url + '/' + isolado.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
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