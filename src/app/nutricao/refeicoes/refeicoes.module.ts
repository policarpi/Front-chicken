import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefeicoesRoutingModule } from './refeicoes-routing.module';
import { RefeicoesFormComponent } from './refeicoes-form/refeicoes-form.component';
import { RefeicoesListaComponent } from './refeicoes-lista/refeicoes-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RefeicoesFormComponent, RefeicoesListaComponent],
  imports: [
    CommonModule,
    RefeicoesRoutingModule,
    FormsModule
  ], exports: [
    RefeicoesFormComponent,
    RefeicoesListaComponent
  ]
})
export class RefeicoesModule { }
