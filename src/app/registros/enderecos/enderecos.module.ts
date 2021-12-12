import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnderecosRoutingModule } from './enderecos-routing.module';
import { EnderecosFormComponent } from './enderecos-form/enderecos-form.component';
import { EnderecosListaComponent } from './enderecos-lista/enderecos-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EnderecosFormComponent, EnderecosListaComponent],
  imports: [
    CommonModule,
    EnderecosRoutingModule,
    FormsModule
  ], exports: [
    EnderecosFormComponent,
    EnderecosListaComponent
  ]
})
export class EnderecosModule { }
