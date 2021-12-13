import { AlimentosRestricaoService } from './alimentos-restricao.service';
import { AlimentosrestricaoModule } from './nutricao/alimentosrestricao/alimentosrestricao.module';
import { RetricaoalimentarModule } from './nutricao/retricaoalimentar/retricaoalimentar.module';
import { EnderecosModule } from './registros/enderecos/enderecos.module';
import { PessoasModule } from './registros/pessoas/pessoas.module';
import { TreinosModule } from './atividadefisica/treinos/treinos.module';
import { EquipamentosModule } from './atividadefisica/equipamentos/equipamentos.module';
import { RefeicoesModule } from './nutricao/refeicoes/refeicoes.module';
import { AlimentosModule } from './nutricao/alimentos/alimentos.module';
import { DietaModule } from './nutricao/dieta/dieta.module';
import { AlimentosService } from './alimentos.service';
import { EquipamentosService } from './equipamentos.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms';
import { PessoasService } from './pessoas.service';
import { RestricaoalimentarService } from './restricaoalimentar.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    DietaModule,
    AlimentosModule,
    RefeicoesModule,
    EquipamentosModule,
    TreinosModule,
    PessoasModule,
    EnderecosModule,
    RetricaoalimentarModule,
    AlimentosrestricaoModule

  ],
  providers: [
    PessoasService,
    EquipamentosService,
    AlimentosService,
    RestricaoalimentarService,
    AlimentosRestricaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
