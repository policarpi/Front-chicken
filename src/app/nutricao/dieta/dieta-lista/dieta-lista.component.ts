import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DietaService } from 'src/app/dieta.service';
import { Alimentos } from '../../alimentos/alimentos';
import { Dietas } from '../dietas';
import { buscaDieta } from './buscaDieta';

@Component({
  selector: 'app-dieta-lista',
  templateUrl: './dieta-lista.component.html',
  styleUrls: ['./dieta-lista.component.css']
})
export class DietaListaComponent implements OnInit {
  [x: string]: any;

  dieta : Dietas [] = [];
  alimentos : Alimentos [] = [];
  dietaSelecionada: Dietas;
  mensagemSucesso: string;
  mensagemErro: string;

  cont : number;
  nome: string;
  lista : buscaDieta [];
 
  message: string;

  constructor(private servicoDieta : DietaService,
    private rota: Router) { }

  ngOnInit(): void {
    
  }

  consultar(){
    this.message = null;
    this.servicoDieta
    .buscarDieta(this.nome)
    .subscribe(respostaSucesso =>{
      this.lista = respostaSucesso;
      if(this.lista.length <= 0){
        this.message = 'Nenhum registro encontrado.';
      }
    })
   
  }



  novoCadastro() {
    this.rota.navigate(['/dietaForm'])
  }

  preparaDelecao(dieta: Dietas) {
    this.dietaSelecionada = dieta;
  }

  deletarDieta() {
    this.servicoDieta
      .deletarDieta(this.dietaSelecionada)
      .subscribe(
        respostaSucesso => {
          this.mensagemSucesso = 'Dieta deletado com sucesso!';
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
