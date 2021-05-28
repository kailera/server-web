import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroccmeiComponent } from './pages/home/components/cadastroccmei/cadastroccmei.component';
import { ViewallComponent } from './pages/home/components/viewall/viewall.component';
import { HomePage } from './pages/home/container/home.page';

const routes: Routes = [
  {path:'home', component: HomePage},
  
  {path:'ccmei',
    children:[
      {path:'cadastro', component: CadastroccmeiComponent},
      {path:'viewall', component: ViewallComponent}
    ]
  },

  {path:'isolados',loadChildren:() => import('./pages/isolados/isolados.module').then(m => m.IsoladosModule)},
  {path:'aif', loadChildren:() => import('./pages/aif/aif.module').then(m => m.AifModule )},
  {path:'**', redirectTo:'/home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
