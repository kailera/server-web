import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistoriaIsoladoComponent } from './container/vistoria-isolado/vistoria-isolado.component';



@NgModule({
  declarations: [
    VistoriaIsoladoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    VistoriaIsoladoComponent
  ]

})
export class VistoriaisoladoModule { }
