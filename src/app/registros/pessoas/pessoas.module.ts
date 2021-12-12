import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoasFormComponent } from './pessoas-form/pessoas-form.component';
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PessoasFormComponent, PessoasListaComponent],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
    PessoasFormComponent,
    PessoasListaComponent
  ]
})
export class PessoasModule { }
