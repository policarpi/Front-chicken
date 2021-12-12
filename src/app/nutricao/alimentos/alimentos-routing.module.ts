import { AlimentosListaComponent } from './alimentos-lista/alimentos-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlimentosFormComponent } from './alimentos-form/alimentos-form.component';


const routes: Routes = [
  { path : 'alimentosForm', component : AlimentosFormComponent},
  { path : 'alimentosForm/:id', component : AlimentosFormComponent},
  { path : 'alimentosLista', component : AlimentosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlimentosRoutingModule { }
