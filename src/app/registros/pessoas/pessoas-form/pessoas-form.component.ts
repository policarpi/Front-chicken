import { PessoasService } from './../../../pessoas.service';
import { Pessoas } from './../pessoas';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pessoas-form',
  templateUrl: './pessoas-form.component.html',
  styleUrls: ['./pessoas-form.component.css']
})
export class PessoasFormComponent implements OnInit {


  pessoa: Pessoas;
  sucesso: boolean = false;
  errosApi: string[];
  id: number;

  constructor(private servicoPessoas: PessoasService,
              private minhaRota: Router,
              private rotaAtiva: ActivatedRoute) {
    this.pessoa = new Pessoas();
  }

  ngOnInit(): void {

     let params: Observable<Params>=this.rotaAtiva.params;

     params.subscribe(parametrosRecebidos=>{
       this.id = parametrosRecebidos['id'];
       if(this.id){
          this.servicoPessoas.getPessoaById(this.id)
          .subscribe(respostaComSucesso=>{
            this.pessoa = respostaComSucesso;
          }, respostaComErro=>{
            this.pessoa = new Pessoas;
          })
       }
     })
  }

  gravarPessoas() {
    if (this.id) {
      this.servicoPessoas
        .atualizarPessoa(this.pessoa)
        .subscribe(respostaComSucesso => {
          this.sucesso = true;
          this.errosApi = null;
        }, respostaComErro => {
          this.sucesso = false;
          this.errosApi = respostaComErro.error.erros;
        })
    } else {
      this.servicoPessoas
        .salvarPessoa(this.pessoa)
        .subscribe(respostaComSucesso => {
          this.sucesso = true;
          this.errosApi = null;
          this.pessoa = respostaComSucesso;
        }, respostaComErro => {
          this.sucesso = false;
          this.errosApi = respostaComErro.error.erros;
        })
    }
  }

  voltarParaListagem() {
    this.minhaRota.navigate(['/pessoasLista']);
  }

  enderecosForm(){
    this.minhaRota.navigate(['/enderecoForm']);
  }
}
