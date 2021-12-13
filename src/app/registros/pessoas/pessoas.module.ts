import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoasFormComponent } from './pessoas-form/pessoas-form.component';
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';
import { FormsModule } from '@angular/forms';
import { EnderecosModule } from '../enderecos/enderecos.module';


@NgModule({
  declarations: [PessoasFormComponent, PessoasListaComponent],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    FormsModule,
    RouterModule,
    EnderecosModule
  ], exports: [
    PessoasFormComponent,
    PessoasListaComponent
  ]
})
export class PessoasModule { }
