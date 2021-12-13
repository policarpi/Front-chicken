import { AlimentosRestricaoBusca } from './alimentosRestricaoBusca';
import { Component, OnInit } from '@angular/core';
import { AlimentosRestricaoService } from 'src/app/alimentos-restricao.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { buscaAlimentosRestricao } from './buscaAlimentosRestricao';
=======
>>>>>>> 966858874515dc6243bdf6f804c966b43aaffe02


@Component({
  selector: 'app-alimentosrestricao-lista',
  templateUrl: './alimentosrestricao-lista.component.html',
  styleUrls: ['./alimentosrestricao-lista.component.css']
})
export class AlimentosrestricaoListaComponent implements OnInit {

  nome: string;
<<<<<<< HEAD
  lista: buscaAlimentosRestricao[];
  mensagem: string;
  message: string;

=======
  listaDeAlimentos: AlimentosRestricaoBusca[];
  message: string;
>>>>>>> 966858874515dc6243bdf6f804c966b43aaffe02

  constructor(private servico : AlimentosRestricaoService) { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
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

=======
  consultarAlimentosRestricao(){
    console.log(this.nome);
      this.message = null;
      this.servico
          .buscar(this.nome)
          .subscribe(respostaComSucesso => {
                this.listaDeAlimentos = respostaComSucesso;
                console.log(respostaComSucesso);
                if (this.listaDeAlimentos.length <= 0){
                  this.message = 'Nenhum registro foi encontrado!'
                }
          }
          )
  }
>>>>>>> 966858874515dc6243bdf6f804c966b43aaffe02
}
