import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, retry } from 'rxjs/operators';
import { IsoladoService } from '../../../services/isolados.service';
import { Isolado } from '../../../../../shared/models/isolado';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromIsoladosActions from '../../state/isolados.actions';
import * as fromIsoladosSelectors from '../../state/isolados.selectors';


@Component({
  selector: 'app-isolados',
  templateUrl: './listaisolados.component.html',
  styleUrls: ['./listaisolados.component.css']
})
export class ListaIsoladosComponent implements OnInit {
  
  isIsolado: boolean;
  isolados$ : Observable<Isolado[]>;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  constructor(private store: Store,
              private router: Router
              ) { }

  ngOnInit(): void {
  // acçao de buscar os isolados:
    this.store.dispatch(fromIsoladosActions.loadIsolados());

    this.isolados$ = this.store.pipe(select(fromIsoladosSelectors.selectCurrentIsolado))
  }

  abrir(id:number): void{
    // chamo o meu componente de vistoria
    // aqui também deve chamar a ação de carregar uma nova vistoria
    this.router.navigateByUrl('/isolados/vistoria/' + id);
  }
  
}
