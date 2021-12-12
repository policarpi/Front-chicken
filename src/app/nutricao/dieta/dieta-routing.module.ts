import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DietaFormComponent } from './dieta-form/dieta-form.component';
import { DietaListaComponent } from './dieta-lista/dieta-lista.component';


const routes: Routes = [
  { path: 'dietasForm' , component : DietaFormComponent},
  { path: 'dietasForm/:id' , component : DietaFormComponent},
  { path: 'dietasLista' , component : DietaListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietaRoutingModule { }
