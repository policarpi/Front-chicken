import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreinosRoutingModule } from './treinos-routing.module';
import { TreinosFormComponent } from './treinos-form/treinos-form.component';
import { TreinosListaComponent } from './treinos-lista/treinos-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TreinosFormComponent, TreinosListaComponent],
  imports: [
    CommonModule,
    TreinosRoutingModule,
    FormsModule
  ], exports:[
    TreinosFormComponent,
    TreinosListaComponent
  ]
})
export class TreinosModule { }
