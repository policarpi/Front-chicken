import { EnderecosListaComponent } from './enderecos-lista/enderecos-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnderecosFormComponent } from './enderecos-form/enderecos-form.component';


const routes: Routes = [
  { path : 'enderecoForm' ,  component :  EnderecosFormComponent},
  { path : 'enderecoForm/:id' , component: EnderecosFormComponent},
  { path : 'enderecoLista' , component: EnderecosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecosRoutingModule { }
