
import { RefeicoesService } from './../../../refeicoes.service';
import { Refeicoes } from './../refeicoes';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-refeicoes-form',
  templateUrl: './refeicoes-form.component.html',
  styleUrls: ['./refeicoes-form.component.css']
})
export class RefeicoesFormComponent implements OnInit {

  refeicao: Refeicoes;
  sucesso: boolean = false;
  errosApi: string[];
  id: number;

  constructor(private servicoRefeicoes: RefeicoesService,
              private rota: Router,
              private rotaAtiva: ActivatedRoute) {
    this.refeicao = new Refeicoes();
  }

  ngOnInit(): void {

     let params: Observable<Params>=this.rotaAtiva.params;

     params.subscribe(parametrosRecebidos=>{
       this.id = parametrosRecebidos['id'];
       if(this.id){
          this.servicoRefeicoes.getRefeicoesById(this.id)
          .subscribe(respostaComSucesso=>{
            this.refeicao = respostaComSucesso;
          }, respostaComErro=>{
            this.refeicao = new Refeicoes();
          })
       }
     })
  }

  gravarRefeicao() {
    if (this.id) {
      this.servicoRefeicoes
        .atualizarRefeicoes(this.refeicao)
        .subscribe(respostaComSucesso => {
          this.sucesso = true;
          this.errosApi = null;
        }, respostaComErro => {
          this.sucesso = false;
          this.errosApi = respostaComErro.error.erros;
        })
    } else {
      this.servicoRefeicoes
        .salvarRefeicoes(this.refeicao)
        .subscribe(respostaComSucesso => {
          this.sucesso = true;
          this.errosApi = null;
          this.refeicao = respostaComSucesso;
        }, respostaComErro => {
          this.sucesso = false;
          this.errosApi = respostaComErro.error.erros;
        })
    }
  }

  voltarParaListagem() {
    this.rota.navigate(['/refeicoesLista']);
  }
}
