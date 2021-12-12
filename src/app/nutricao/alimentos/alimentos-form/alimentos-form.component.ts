import { AlimentosService } from './../../../alimentos.service';
import { Alimentos } from './../alimentos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alimentos-form',
  templateUrl: './alimentos-form.component.html',
  styleUrls: ['./alimentos-form.component.css']
})
export class AlimentosFormComponent implements OnInit {

  alimento : Alimentos;
  sucesso : boolean = false;
  errosApi: string[];
  id: number;

  constructor(private servicoAlimentos : AlimentosService,
              private rota : Router,
              private rotaAtiva : ActivatedRoute) {

    this.alimento = new Alimentos();
  }

  ngOnInit(): void {

    let params : Observable<Params> = this.rotaAtiva.params;

    params.subscribe(parametrosRecebidos =>{
      this.id = parametrosRecebidos['id'];
      if(this.id){
        this.servicoAlimentos.getAlimentoById(this.id)
        .subscribe(respostaComSucesso => {
          this.alimento = respostaComSucesso;
        }, respostaComErro =>{
          this.alimento = new Alimentos();
        })
      }
    }
    )
  }

  gravarAlimento(){

    console.log(this.alimento);

    if(this.id){
      this.servicoAlimentos.atualizarAlimento(this.alimento)
      .subscribe(respostaSucesso =>{
        this.sucesso=true;
        this.errosApi=null;
        this.alimento=respostaSucesso
      }, respostaErro=>{
        this.sucesso = false;
        this.errosApi = respostaErro.error.erros;
      })

    }else{
      this.servicoAlimentos.salvarAlimento(this.alimento)
      .subscribe(respostaSucesso =>{
        this.sucesso=true;
        this.errosApi=null;
        this.alimento=respostaSucesso
      }, respostaErro=>{
        this.sucesso = false;
        this.errosApi = respostaErro.error.erros;
      })
    }
 }

 voltarParaListagem(){
   this.rota.navigate(['/alimentosLista']);
 }

}
