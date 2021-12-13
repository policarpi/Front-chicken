import { AlimentosRestricaoBusca } from './alimentosRestricaoBusca';
import { Component, OnInit } from '@angular/core';
import { AlimentosRestricaoService } from 'src/app/alimentos-restricao.service';


@Component({
  selector: 'app-alimentosrestricao-lista',
  templateUrl: './alimentosrestricao-lista.component.html',
  styleUrls: ['./alimentosrestricao-lista.component.css']
})
export class AlimentosrestricaoListaComponent implements OnInit {

  nome: string;
  listaDeAlimentos: AlimentosRestricaoBusca[];
  message: string;

  constructor(private servico : AlimentosRestricaoService) { }

  ngOnInit(): void {
  }


  consultarAlimentosRestricao(){
    console.log(this.nome);
      this.message = null;
      this.servico
          .buscarAlimentosRestricao(this.nome)
          .subscribe(respostaComSucesso => {
                this.listaDeAlimentos = respostaComSucesso;
                console.log(respostaComSucesso);
                if (this.listaDeAlimentos.length <= 0){
                  this.message = 'Nenhum registro foi encontrado!'
                }
          }
          )
  }
}
