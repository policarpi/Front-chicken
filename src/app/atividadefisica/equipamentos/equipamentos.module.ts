import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipamentosRoutingModule } from './equipamentos-routing.module';
import { EquipamentosFormComponent } from './equipamentos-form/equipamentos-form.component';
import { EquipamentosListaComponent } from './equipamentos-lista/equipamentos-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EquipamentosFormComponent, EquipamentosListaComponent],
  imports: [
    CommonModule,
    EquipamentosRoutingModule,
    FormsModule
  ], exports:[
    EquipamentosFormComponent,
    EquipamentosListaComponent
  ]
})
export class EquipamentosModule { }
