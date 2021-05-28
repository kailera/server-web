
import { Action, createReducer, on } from '@ngrx/store';
import { Isolado } from 'src/app/shared/models/isolado';

import * as fromIsoladoActions from './isolados.actions';

export interface IsoladoState{
    isolados: Isolado[],
    loading: boolean, 
    error: boolean,
}

export const IsoladoInitialState : IsoladoState = {
    isolados: undefined,
    loading: false,
    error: false
    
}

const reducer = createReducer(
    IsoladoInitialState,
    on(fromIsoladoActions.loadIsolados, state =>({
        ...state,
        isolados:undefined,
        loading:true,
        error:false
    })),

    on(fromIsoladoActions.loadIsoladosSuccess, (state, {isolado}) =>({
        ...state,
        isolados:isolado, 
        loading:false
    })),

    on(fromIsoladoActions.loadIsoladosFailed, state => ({
        ...state,
        error:true,
    }))
    
);

export function isoledReducer (state: IsoladoState | undefined, action: Action):IsoladoState{
    return reducer(state, action)
}