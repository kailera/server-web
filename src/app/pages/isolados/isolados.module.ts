import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaIsoladosComponent } from './listaIsolados/container/listaisolados/listaisolados.component';
import { RouterModule, Routes } from '@angular/router';
import { IsoladosCadastroComponent } from './cadastroisolados/container/isolados-cadastro/isolados-cadastro.component';
import { CamposModule } from 'src/app/shared/components/campos/campos.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IsoladosDetailsComponent } from './listaIsolados/components/isolados-details/isolados-details.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { VistoriaIsoladoComponent } from './vistoriaisolado/container/vistoria-isolado/vistoria-isolado.component';
import { ListaIsoladosModule } from './listaIsolados/lista-isolados.module';
import { IsoladosEffects } from './listaIsolados/state/isolados.effects';

export const routes : Routes = [
  {path:'', component: ListaIsoladosComponent},
  {path:'cadastro', component: IsoladosCadastroComponent},
  {path:'vistoria/:id', component: VistoriaIsoladoComponent}
]

@NgModule({
  declarations: [
    IsoladosCadastroComponent,
    VistoriaIsoladoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CamposModule,
    ListaIsoladosModule,
    RouterModule.forChild(routes),

  ]
})
export class IsoladosModule { }
