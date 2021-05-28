import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomePage } from './container/home.page';
import { ViewallComponent } from './components/viewall/viewall.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CamposModule } from 'src/app/shared/components/campos/campos.module';
import { CadastroccmeiComponent } from './components/cadastroccmei/cadastroccmei.component';



@NgModule({
  declarations: [
    HomePage,
    ViewallComponent,
    CadastroccmeiComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule,
    SharedModule,
    CamposModule
  ],
  exports:[HomePage]
})
export class HomeModule { }
