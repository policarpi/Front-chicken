import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefeicoesListaComponent } from './refeicoes-lista/refeicoes-lista.component';
import { RefeicoesFormComponent } from './refeicoes-form/refeicoes-form.component';


const routes: Routes = [
  { path: 'refeicoesForm' ,  component: RefeicoesFormComponent },
  { path: 'refeicoesForm/:id' ,  component: RefeicoesFormComponent },
  { path: 'refeicoesLista' ,  component: RefeicoesListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefeicoesRoutingModule { }
