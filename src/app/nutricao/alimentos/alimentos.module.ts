import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimentosRoutingModule } from './alimentos-routing.module';
import { AlimentosFormComponent } from './alimentos-form/alimentos-form.component';
import { AlimentosListaComponent } from './alimentos-lista/alimentos-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AlimentosFormComponent, AlimentosListaComponent],
  imports: [
    CommonModule,
    AlimentosRoutingModule,
    FormsModule
  ],exports:[
    AlimentosFormComponent,
    AlimentosListaComponent
  ]
})
export class AlimentosModule { }
