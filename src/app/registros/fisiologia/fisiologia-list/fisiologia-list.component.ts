import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FisiologiaService } from 'src/app/fisiologia.service';
import { Fisiologias } from '../fisiologia';
import { buscaFisiologia } from './buscaFisiologia';

@Component({
  selector: 'app-fisiologia-list',
  templateUrl: './fisiologia-list.component.html',
  styleUrls: ['./fisiologia-list.component.css']
})
export class FisiologiaListComponent implements OnInit {

  fisiologia: Fisiologias [] = [];
  fisiologiaSelecionado: Fisiologias;
  mensagemSucesso: string;
  mensagemErro: string;

  nome: string;
  lista: buscaFisiologia[];
  message: string;


  constructor(private servicoFisio: FisiologiaService,
    private rota: Router) { }

  ngOnInit(): void {
  }

  consultar(){
    this.message = null;
    this.servicoFisio
    .buscarFisiologia(this.nome)
    .subscribe(respostaSucesso =>{
      this.lista = respostaSucesso;
      if(this.lista.length <= 0){
        this.message = 'Nenhum registro encontrado.';
      }
      console.log("Passou aqui")
    })
  }

  novoCadastro() {
    this.rota.navigate(['/fisiologiaForms'])
  }

  preparaDelecao(fisiologia: Fisiologias) {
    this.fisiologiaSelecionado = fisiologia;
  }

  deletarFisioo() {
    this.servicoFisio
      .deletarFisiologia(this.fisiologiaSelecionado)
      .subscribe(
        respostaSucesso => {
          this.mensagemSucesso = 'Fisologia deletado com sucesso!';
          this.mensagemErro = null;
          this.ngOnInit();
        },
        respostaErro => {
          this.mensagemSucesso = null;
          this.mensagemErro = 'Ocorreu um erro ao deletar o treino selecionado!';
        }
      )
  }


}
