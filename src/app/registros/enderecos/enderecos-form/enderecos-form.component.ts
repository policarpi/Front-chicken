import { PessoasService } from './../../../pessoas.service';
import { EnderecosService } from './../../../enderecos.service';
import { Component,  OnInit } from '@angular/core';
import { Endereco } from '../enderecos';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pessoas } from '../../pessoas/pessoas';

@Component({
  selector: 'app-enderecos-form',
  templateUrl: './enderecos-form.component.html',
  styleUrls: ['./enderecos-form.component.css']
})
export class EnderecosFormComponent implements OnInit {


  pessoas: Pessoas[] = [];
  endereco: Endereco;
  sucesso: boolean = false;
  errosApi: string[];
  id: number;

  constructor(private enderecosService: EnderecosService,
              private servicoPessoa: PessoasService,
              private rota: Router,
              private rotaAtiva: ActivatedRoute) {
    this.endereco = new Endereco();

  }

  ngOnInit(): void {

    this.servicoPessoa.getPessoas().subscribe(respostaSucesso => this.pessoas = respostaSucesso);

     let params: Observable<Params>=this.rotaAtiva.params;

     params.subscribe(parametrosRecebidos=>{
       this.id = parametrosRecebidos['id'];
       if(this.id){
          this.enderecosService.getEnderecoById(this.id)
          .subscribe(respostaComSucesso=>{
            this.endereco = respostaComSucesso;
          }, respostaComErro=>{
            this.endereco = new Endereco();
          })
       }
     })
  }

  gravarEndereco() {
    if (this.id) {
      this.enderecosService
        .atualizarEndereco(this.endereco)
        .subscribe(respostaComSucesso => {
          this.sucesso = true;
          this.errosApi = null;
        }, respostaComErro => {
          this.sucesso = false;
          this.errosApi = respostaComErro.error.erros;
        })
    } else {
      this.enderecosService
        .salvarEndereco(this.endereco)
        .subscribe(respostaComSucesso => {
          this.sucesso = true;
          this.errosApi = null;
          this.endereco = respostaComSucesso;
        }, respostaComErro => {
          this.sucesso = false;
          this.errosApi = respostaComErro.error.erros;
        })
    }
  }

  voltarParaListagem() {
    this.rota.navigate(['/enderecoLista']);
  }
}
