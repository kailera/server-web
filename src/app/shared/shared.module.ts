import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { ModalComponent } from './components/modal/modal.component';
import { CamposModule } from './components/campos/campos.module';



@NgModule({
  declarations: [
    FooterComponent,
    NavTopComponent,
    ModalComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CamposModule
  ],
  exports:[
    NavTopComponent,
    ModalComponent,
    FooterComponent,
    ModalComponent
  ],
})
export class SharedModule { }
