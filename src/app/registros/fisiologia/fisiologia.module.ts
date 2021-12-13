import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FisiologiaRoutingModule } from './fisiologia-routing.module';
import { FisiologiaListComponent } from './fisiologia-list/fisiologia-list.component';
import { FisiologiaFormsComponent } from './fisiologia-forms/fisiologia-forms.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FisiologiaListComponent, FisiologiaFormsComponent],
  imports: [
    CommonModule,
    FisiologiaRoutingModule,
    FormsModule
  ], exports:[
FisiologiaFormsComponent,
FisiologiaListComponent
  ]
})
export class FisiologiaModule { }
