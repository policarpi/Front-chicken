import { AlimentosrestricaoListaComponent } from './alimentosrestricao-lista/alimentosrestricao-lista.component';
import { AlimentosListaComponent } from './../alimentos/alimentos-lista/alimentos-lista.component';
import { AlimentosrestricaoFormComponent } from './alimentosrestricao-form/alimentosrestricao-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'alimentosRestricaoForm', component : AlimentosrestricaoFormComponent},
  { path: 'alimentosRestricaoForm/:id', component : AlimentosrestricaoFormComponent},
  { path: 'alimentosRestricaoLista', component : AlimentosrestricaoListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlimentosrestricaoRoutingModule { }
