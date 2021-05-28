import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroaifPage } from './container/cadastroaif/cadastroaif.page';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CadastroaifPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component:CadastroaifPage}
    ])
  ]
})
export class AifModule { }
