import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextComponent } from './input-text/input-text.component';
import { InputDataComponent } from './input-data/input-data.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { ValidarCamposService } from './validar-campos.service';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';




@NgModule({
  declarations: [
    InputTextComponent,
    InputDataComponent,
    InputNumberComponent,
    SelectComponent,
    TextareaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[
    InputTextComponent,
    InputDataComponent,
    InputNumberComponent,
    SelectComponent, 
    TextareaComponent
  ],
})
export class CamposModule { }
