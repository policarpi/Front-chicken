import { RefeicoesService } from './../../../refeicoes.service';
import { Refeicoes } from './../refeicoes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refeicoes-lista',
  templateUrl: './refeicoes-lista.component.html',
  styleUrls: ['./refeicoes-lista.component.css']
})
export class RefeicoesListaComponent implements OnInit {

  refeicoes: Refeicoes[] = [];
  refeicaoSelecionada: Refeicoes;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private servicoRefeicao: RefeicoesService,
    private rota: Router) { }

  ngOnInit(): void {
    this.servicoRefeicao.getRefeicoes()
      .subscribe(respostaComSucesso => {
        this.refeicoes = respostaComSucesso;
        console.log("Não passou aqui")
      })
  }

  novoCadastro() {
    this.rota.navigate(['/refeicoesForm'])
  }

  preparaDelecao(refeicoes: Refeicoes) {
    this.refeicaoSelecionada = refeicoes;
  }

  deletarRefeicao() {
    this.servicoRefeicao
      .deletarRefeicoes(this.refeicaoSelecionada)
      .subscribe(
        respostaSucesso => {
          this.mensagemSucesso = 'Refeição deletada com sucesso!';
          this.mensagemErro = null;
          this.ngOnInit();
        },
        respostaErro => {
          this.mensagemSucesso = null;
          this.mensagemErro = 'Ocorreu um erro ao deletar a Refeição selecionada!';
        }
      )
  }

}
