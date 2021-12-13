import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TreinosService } from 'src/app/treinos.service';
import { Equipamentos } from '../../equipamentos/equipamentos';
import { Treinos } from '../treinos';
import { buscaTreino } from './buscaTreino';

@Component({
  selector: 'app-treinos-lista',
  templateUrl: './treinos-lista.component.html',
  styleUrls: ['./treinos-lista.component.css']
})
export class TreinosListaComponent implements OnInit {

  treinos: Treinos[] = [];
  treinoSelecionado: Treinos;
  mensagemSucesso: string;
  mensagemErro: string;

  nome: string;
  lista: buscaTreino[];
  message: string;


  constructor(private servicoTreino: TreinosService,
    private rota: Router) { }

  ngOnInit(): void {
/*  this.servicoTreino
    .getTreino()
    .subscribe(respostSucesso =>  
      this.treinos = respostSucesso);
      console.log('que erro!!!!')
  */  
  }

  consultar(){
    this.message = null;
    this.servicoTreino
    .buscarTreinos(this.nome)
    .subscribe(respostaSucesso =>{
      this.lista = respostaSucesso;
      if(this.lista.length <= 0){
        this.message = 'Nenhum registro encontrado.';
      }
      console.log("Passou aqui")
    })
  }

  novoCadastro() {
    this.rota.navigate(['/treinosForm'])
  }

  preparaDelecao(treinos: Treinos) {
    this.treinoSelecionado = treinos;
  }

  deletarTreino() {
    this.servicoTreino
      .deletarTreino(this.treinoSelecionado)
      .subscribe(
        respostaSucesso => {
          this.mensagemSucesso = 'Treino deletado com sucesso!';
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
