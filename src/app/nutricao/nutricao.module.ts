import { RefeicoesModule } from './refeicoes/refeicoes.module';
import { AlimentosModule } from './alimentos/alimentos.module';
import { DietaModule } from './dieta/dieta.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutricaoRoutingModule } from './nutricao-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NutricaoRoutingModule
  ],exports: [
   DietaModule,
   AlimentosModule,
   RefeicoesModule
  ]
})
export class NutricaoModule { }
