import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { IsoladosDetailsComponent } from './components/isolados-details/isolados-details.component';
import { ListaIsoladosComponent } from './container/listaisolados/listaisolados.component';
import { IsoladosEffects } from './state/isolados.effects';
import { isoledReducer } from './state/isolados.reducer';

@NgModule({
  declarations: [
    ListaIsoladosComponent,
    IsoladosDetailsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('isolado', isoledReducer),
    EffectsModule.forFeature([IsoladosEffects])

  ],
  exports:[
    ListaIsoladosComponent,
    IsoladosDetailsComponent,
  ]
})
export class ListaIsoladosModule { }
