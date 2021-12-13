import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FisiologiaFormsComponent } from './fisiologia-forms/fisiologia-forms.component';
import { FisiologiaListComponent } from './fisiologia-list/fisiologia-list.component';


const routes: Routes = [
  {path: 'fisiologiaForm', component: FisiologiaFormsComponent},
  {path: 'fisiologiaForm/:id', component: FisiologiaFormsComponent},
  {path: 'fisiologiaLista', component: FisiologiaListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FisiologiaRoutingModule { }
