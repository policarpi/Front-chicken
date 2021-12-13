import { AlimentosRestricao } from './../alimentosrestricao';
import { AlimentosRestricaoBusca } from './alimentosRestricaoBusca';
import { Component, OnInit } from '@angular/core';
import { AlimentosRestricaoService } from 'src/app/alimentos-restricao.service';
import { Router } from '@angular/router';
import { buscaAlimentosRestricao } from './buscaAlimentosRestricao';


@Component({
  selector: 'app-alimentosrestricao-lista',
  templateUrl: './alimentosrestricao-lista.component.html',
  styleUrls: ['./alimentosrestricao-lista.component.css']
})
export class AlimentosrestricaoListaComponent implements OnInit {

  alimentosRestricao: AlimentosRestricao[] = [];
  alimentosRestricaoSelecionado: AlimentosRestricao;
  mensagemSucesso: string;
  mensagemErro: string;

  nome: string;
  lista: buscaAlimentosRestricao[];
  mensagem: string;
  message: string;


  constructor(private servico: AlimentosRestricaoService,
    private rota: Router) { }

  ngOnInit(): void {

  }

  consultar(){
    this.mensagem = null;
    this.servico
    .buscarAlimentosRestricao(this.nome)
    .subscribe(respostaSucesso =>{
      this.lista = respostaSucesso;
      if(this.lista.length <= 0){
        this.mensagem = 'Nenhum registro encontrado.';
      }
      console.log("Passou aqui")
    })
  }

  novoCadastro() {
    this.rota.navigate(['/alimentosRestricaoForm'])
  }

  preparaDelecao(alimentosRestricao: AlimentosRestricao) {
    this.alimentosRestricaoSelecionado = alimentosRestricao;
  }

  deletarRestricao() {
    this.servico
      .deletarAlimentosRestricao(this.alimentosRestricaoSelecionado)
      .subscribe(
        respostaSucesso => {
          this.mensagemSucesso = 'Alimento restrito deletado com sucesso!';
          this.mensagemErro = null;
          this.ngOnInit();
        },
        respostaErro => {
          this.mensagemSucesso = null;
          this.mensagemErro = 'Ocorreu um erro ao deletar o alimento selecionado!';
        }
      )
  }

}
