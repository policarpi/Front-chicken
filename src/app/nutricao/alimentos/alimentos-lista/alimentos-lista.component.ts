import { AlimentosService } from './../../../alimentos.service';
import { Alimentos } from './../alimentos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alimentos-lista',
  templateUrl: './alimentos-lista.component.html',
  styleUrls: ['./alimentos-lista.component.css']
})
export class AlimentosListaComponent implements OnInit {

  alimentos: Alimentos[] = [];
  alimentoSelecionado: Alimentos;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private servicoAlimentos : AlimentosService,
              private rota: Router) {

  }

  ngOnInit(): void {
    this.servicoAlimentos.getAlimentos()
    .subscribe(respostaComSucesso =>{
      this.alimentos = respostaComSucesso;
    })
  }

  novoAlimento() {
    this.rota.navigate(['/alimentosForm']);
  }

  preparaDelecao(alimento: Alimentos) {
    this.alimentoSelecionado = alimento;
  }

  deletarAlimento() {
    this.servicoAlimentos.deletarAlimento(this.alimentoSelecionado)
      .subscribe(respostaComSucesso => {
        this.mensagemSucesso = "Sucesso!";
        this.mensagemErro = null;
        this.ngOnInit();
      }, respostaComErro => {
        this.mensagemErro = 'Ocorreu um erro ao deletar o alimento selecionado!';
        this.mensagemSucesso = null;
      })
  }

}
