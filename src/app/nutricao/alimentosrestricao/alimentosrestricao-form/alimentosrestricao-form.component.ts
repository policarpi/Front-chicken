import { RestricaoalimentarService } from 'src/app/restricaoalimentar.service';
import { AlimentosService } from './../../../alimentos.service';
import { RestricaoAlimentar } from './../../retricaoalimentar/restricaoalimentar';
import { Alimentos } from './../../alimentos/alimentos';
import { Component, OnInit } from '@angular/core';
import { AlimentosRestricao } from '../alimentosrestricao';
import { AlimentosRestricaoService } from 'src/app/alimentos-restricao.service';

@Component({
  selector: 'app-alimentosrestricao-form',
  templateUrl: './alimentosrestricao-form.component.html',
  styleUrls: ['./alimentosrestricao-form.component.css']
})
export class AlimentosrestricaoFormComponent implements OnInit {

  alimentos: Alimentos[] = [];
  restricaoAlimentar: RestricaoAlimentar[] = [];
  alimentosrestricao: AlimentosRestricao;
  sucesso: boolean = false;
  errosApi: String[];

  constructor(private servicoAlimentos: AlimentosService,
              private servicoRestricaoAlimentar: RestricaoalimentarService,
              private servicoAlimentosRestricao: AlimentosRestricaoService) {
        this.alimentosrestricao = new AlimentosRestricao();
  }

  ngOnInit(): void {
      this.servicoAlimentos
          .getAlimentos()
          .subscribe(respostaComSucesso => {
              this.alimentos = respostaComSucesso;
          })

      this.servicoRestricaoAlimentar
          .getRestricaoAlimentar()
          .subscribe(respostaComSucesso => {
                this.restricaoAlimentar = respostaComSucesso;
          })
  }

  gravarAlimentosRestricao(){
      this.servicoAlimentosRestricao
          .salvarAlimentosRestricao(this.alimentosrestricao)
          .subscribe(respostaComSucesso => {
                this.sucesso = true;
                this.errosApi = null;
                this.alimentosrestricao = respostaComSucesso;
          }, respostaComErro => {
                this.sucesso = false;
                this.errosApi = respostaComErro.error.erros;
          })
  }

}
