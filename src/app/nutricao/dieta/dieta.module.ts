import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietaRoutingModule } from './dieta-routing.module';
import { DietaFormComponent } from './dieta-form/dieta-form.component';
import { DietaListaComponent } from './dieta-lista/dieta-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DietaFormComponent, DietaListaComponent],
  imports: [
    CommonModule,
    DietaRoutingModule,
    FormsModule
  ], exports: [
    DietaFormComponent,
    DietaListaComponent
  ]
})
export class DietaModule { }
