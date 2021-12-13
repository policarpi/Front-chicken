import { RestricaoalimentarListaComponent } from './restricaoalimentar-lista/restricaoalimentar-lista.component';
import { RestricaoalimentarFormComponent } from './restricaoalimentar-form/restricaoalimentar-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'restricaoAlimentarForm', component : RestricaoalimentarFormComponent },
  { path: 'restricaoAlimentarForm/:id', component : RestricaoalimentarFormComponent },
  { path: 'restricaoAlimentarLista', component : RestricaoalimentarListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetricaoalimentarRoutingModule { }
