import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimentosrestricaoRoutingModule } from './alimentosrestricao-routing.module';
import { AlimentosrestricaoFormComponent } from './alimentosrestricao-form/alimentosrestricao-form.component';
import { AlimentosrestricaoListaComponent } from './alimentosrestricao-lista/alimentosrestricao-lista.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AlimentosrestricaoFormComponent, AlimentosrestricaoListaComponent],
  imports: [
    CommonModule,
    AlimentosrestricaoRoutingModule,
    FormsModule,
    RouterModule,

  ], exports:[
    AlimentosrestricaoFormComponent,
    AlimentosrestricaoListaComponent
  ]
})
export class AlimentosrestricaoModule { }
