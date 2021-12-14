import { EnderecosService } from './../../../enderecos.service';
import { BuscaEndereco } from './buscaEndereco';
import { Component, OnInit } from '@angular/core';
import { Endereco } from '../enderecos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enderecos-lista',
  templateUrl: './enderecos-lista.component.html',
  styleUrls: ['./enderecos-lista.component.css']
})
export class EnderecosListaComponent implements OnInit {

  enderecos: Endereco [] = [];
  enderecoSelecionado: Endereco;
  mensagemSucesso: string;
  mensagemErro: string;

  nome: string;
  listaEnderecoPessoa: BuscaEndereco[];
  mensagem: string;


  constructor(private servicoEndereco: EnderecosService,
              private rota: Router) { }

  ngOnInit(): void {
  }

  consultarEndereco(){
    this.mensagem = null;
    this.servicoEndereco
    .buscarEnderecos(this.nome)
    .subscribe(respostaSucesso =>{
      this.listaEnderecoPessoa = respostaSucesso;
      if(this.listaEnderecoPessoa.length <= 0){
        this.mensagem = 'Nenhum registro encontrado.';
      }

    })
  }

  novoCadastro() {
    this.rota.navigate(['/enderecoForm'])
  }

  preparaDelecao(enderecoSelecionado: Endereco) {
    this.enderecoSelecionado = enderecoSelecionado;
  }

  deletarEndereco() {
    this.servicoEndereco
      .deletarEndereco(this.enderecoSelecionado)
      .subscribe(
        respostaSucesso => {
          this.mensagemSucesso = 'Endereco deletado com sucesso!';
          this.mensagemErro = null;
          this.ngOnInit();
        },
        respostaErro => {
          this.mensagemSucesso = null;
          this.mensagemErro = 'Ocorreu um erro ao deletar o endereco selecionado!';
        }
      )
  }

}
