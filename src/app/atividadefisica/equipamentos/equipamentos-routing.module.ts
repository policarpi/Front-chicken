import { EquipamentosListaComponent } from './equipamentos-lista/equipamentos-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipamentosFormComponent } from './equipamentos-form/equipamentos-form.component';


const routes: Routes = [
  { path : 'equipamentosForm', component: EquipamentosFormComponent},
  { path : 'equipamentosForm/:id', component: EquipamentosFormComponent},
  { path : 'equipamentosLista' ,  component: EquipamentosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipamentosRoutingModule { }
