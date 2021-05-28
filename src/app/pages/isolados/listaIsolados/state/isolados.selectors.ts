import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Isolado } from "src/app/shared/models/isolado";
import { IsoladoState } from "./isolados.reducer";

export const selectIsoladoState = createFeatureSelector<IsoladoState>('isolado');

export const selectCurrentIsolado = createSelector(
    selectIsoladoState,
    (isoladostate: IsoladoState) => isoladostate.isolados, 
)

export const selectIsoladoLoading = createSelector(
    selectIsoladoState,
    (isoladostate: IsoladoState) => isoladostate.loading
)


export const selectIsoladoError = createSelector(
    selectIsoladoState,
    (isoladostate: IsoladoState) => isoladostate.error
)
