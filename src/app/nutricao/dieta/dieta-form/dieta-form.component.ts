import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlimentosService } from 'src/app/alimentos.service';
import { DietaService } from 'src/app/dieta.service';
import { PessoasService } from 'src/app/pessoas.service';
import { RefeicoesService } from 'src/app/refeicoes.service';
import { Pessoas } from 'src/app/registros/pessoas/pessoas';
import { Alimentos } from '../../alimentos/alimentos';
import { Refeicoes } from '../../refeicoes/refeicoes';
import { Dietas } from '../dietas';

@Component({
  selector: 'app-dieta-form',
  templateUrl: './dieta-form.component.html',
  styleUrls: ['./dieta-form.component.css']
})
export class DietaFormComponent implements OnInit {

  dietas : Dietas;
  pessoas : Pessoas [] = [];
  alimentos : Alimentos [] = [];
  refeicoes : Refeicoes [] = [];
  sucesso: boolean = false;
  errosApi: string[];

  constructor(
    private servicoDieta : DietaService,
    private rota : Router,
    private servicoAlimento : AlimentosService,
    private servivoRefeicao : RefeicoesService,
    private servicoPessoa: PessoasService
    ){
    this.dietas = new Dietas ();
    }

  ngOnInit(): void {
    this.servicoPessoa.getPessoas().subscribe(respostaSucesso => this.pessoas = respostaSucesso);
    this.servivoRefeicao.getRefeicoes().subscribe(respostaSucesso => this.refeicoes = respostaSucesso);
    this.servicoAlimento.getAlimentos().subscribe(respostaSucesso => this.alimentos = respostaSucesso);
  }
  onSubmit(){
    this.servicoDieta
    .salvarDieta(this.dietas)
    .subscribe(response => {
      this.sucesso = true;
      this.errosApi = null;
      this.dietas = new Dietas();
    }, errorResponse => {
      this.errosApi = errorResponse.error.erros;
      this.sucesso = false;
    }
      )}
      voltarParaListagem() {
        this.rota.navigate(['/dietasLista']);
      }
}
