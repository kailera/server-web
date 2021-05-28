import {Action, createAction, props} from '@ngrx/store';
import { Isolado } from 'src/app/shared/models/isolado';

/* 
    lista isolado busca todos os isolados que não foram visitados (loading, success, failed)
*/


export const loadIsolados = createAction(
    '[Lista Isolados] Load Isolados'
)

export const loadIsoladosSuccess = createAction(
    '[Lista Isolados] Load Isolado Success',
    props<{isolado: Isolado[]}>(),
)

export const loadIsoladosFailed = createAction('[Lista Isolados] Load Isolados Failed');
