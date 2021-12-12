import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasFormComponent } from './pessoas-form/pessoas-form.component';


const routes: Routes = [
  { path : 'pessoasForm' , component: PessoasFormComponent },
  { path : 'pessoasForm/:id' , component: PessoasFormComponent},
  { path : 'pessoasLista' , component: PessoasListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
