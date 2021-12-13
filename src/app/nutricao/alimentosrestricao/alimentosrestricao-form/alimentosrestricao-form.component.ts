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

  alimentos: Alimentos [] = [];
  restricaoAlimentar: RestricaoAlimentar [] = [];
  alimentoRestrito: AlimentosRestricao;
  sucesso: boolean = false;
  errosApi: String[];

  constructor(private servicoAlimento : AlimentosService,
              private servicoRestricaoAlimentar : RestricaoalimentarService,
              private servicoAlimentosRestritos: AlimentosRestricaoService) {
        this.alimentoRestrito = new AlimentosRestricao();
  }

  
  ngOnInit(): void {
      this.servicoAlimento
          .getAlimentos()
          .subscribe(respostaComSucesso => {
              this.alimentos = respostaComSucesso;
              console.log(this.alimentos);
          })

      this.servicoRestricaoAlimentar
          .getRestricaoAlimentar()
          .subscribe(respostaComSucesso => {
                this.restricaoAlimentar = respostaComSucesso;
          })
  }

  gravarAlimento(){
      this.servicoAlimentosRestritos
          .salvarAlimentosRestricao(this.alimentoRestrito)
          .subscribe(respostaComSucesso => {
                this.sucesso = true;
                this.errosApi = null;
                this.alimentoRestrito = respostaComSucesso;
                console.log(this.alimentoRestrito.idAlimentos);
          }, respostaComErro => {
                this.sucesso = false;
                this.errosApi = respostaComErro.error.erros;
          })
  }

}
