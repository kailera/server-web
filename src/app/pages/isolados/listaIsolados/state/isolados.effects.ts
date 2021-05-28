import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from "rxjs";
import { map, catchError, mergeMap } from "rxjs/operators";
import { IsoladoService } from "../../services/isolados.service";

import * as fromIsoladosActions from './isolados.actions';

@Injectable()

export class IsoladosEffects{
    loadIsolados$ = createEffect(()=> this.actions$.pipe(
        ofType(fromIsoladosActions.loadIsolados),
        mergeMap(()=> this.isoladosservice.getIsolados()
            .pipe(
                map(isolados => (
                    fromIsoladosActions.loadIsoladosSuccess({isolado : isolados})
                )),
                catchError(()=> EMPTY)
            )
        )
    ));



    constructor(
        private actions$: Actions,
        private isoladosservice: IsoladoService
    ){}

}

