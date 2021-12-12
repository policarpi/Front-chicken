import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreinosFormComponent } from './treinos-form/treinos-form.component';
import { TreinosListaComponent } from './treinos-lista/treinos-lista.component';


const routes: Routes = [
  { path: 'treinosForm', component : TreinosFormComponent },
  { path: 'treinosForm/:id', component : TreinosFormComponent},
  { path: 'treinosLista', component : TreinosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreinosRoutingModule { }
