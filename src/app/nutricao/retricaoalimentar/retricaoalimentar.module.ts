import { RestricaoalimentarFormComponent } from './restricaoalimentar-form/restricaoalimentar-form.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetricaoalimentarRoutingModule } from './retricaoalimentar-routing.module';
import { FormsModule } from '@angular/forms';
import { RestricaoalimentarListaComponent } from './restricaoalimentar-lista/restricaoalimentar-lista.component';


@NgModule({
  declarations: [RestricaoalimentarListaComponent, RestricaoalimentarFormComponent],
  imports: [
    CommonModule,
    RetricaoalimentarRoutingModule,
    FormsModule,
    RouterModule
  ],exports:[
    RestricaoalimentarListaComponent,
    RestricaoalimentarFormComponent
  ]
})
export class RetricaoalimentarModule { }
