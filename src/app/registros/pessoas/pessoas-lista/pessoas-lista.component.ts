import { PessoasService } from './../../../pessoas.service';
import { Pessoas } from './../pessoas';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoas-lista',
  templateUrl: './pessoas-lista.component.html',
  styleUrls: ['./pessoas-lista.component.css']
})
export class PessoasListaComponent implements OnInit {

  pessoas: Pessoas[] = [];
  pessoaSelecionada: Pessoas;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private servicoDePessoas: PessoasService,
    private minhaRota: Router) { }

  ngOnInit(): void {
    this.servicoDePessoas.getPessoas()
      .subscribe(respostaComSucesso => {
        this.pessoas = respostaComSucesso;
      })
  }

  novoCadastro() {
    this.minhaRota.navigate(['/pessoasForm'])
  }

  preparaDelecao(pessoas: Pessoas) {
    this.pessoaSelecionada = pessoas;
  }

  deletarPessoa() {
    this.servicoDePessoas
      .deletarPessoa(this.pessoaSelecionada)
      .subscribe(
        respostaSucesso => {
          this.mensagemSucesso = 'Pessoa deletado com sucesso!';
          this.mensagemErro = null;
          this.ngOnInit();
        },
        respostaErro => {
          this.mensagemSucesso = null;
          this.mensagemErro = 'Ocorreu um erro ao deletar a Pessoa selecionada!';
        }
      )
  }

}
