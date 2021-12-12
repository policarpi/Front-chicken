import { EquipamentosService } from './../../../equipamentos.service';
import { Component, OnInit } from '@angular/core';
import { Equipamentos } from '../equipamentos';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-equipamentos-form',
  templateUrl: './equipamentos-form.component.html',
  styleUrls: ['./equipamentos-form.component.css']
})
export class EquipamentosFormComponent implements OnInit {

  equipamento: Equipamentos;
  sucesso: boolean = false;
  errosApi: string[];
  id: number;

  constructor(private servicoEquipamentos: EquipamentosService,
              private rota: Router,
              private rotaAtiva: ActivatedRoute) {
    this.equipamento = new Equipamentos();
  }

  ngOnInit(): void {

     let params: Observable<Params>=this.rotaAtiva.params;

     params.subscribe(parametrosRecebidos=>{
       this.id = parametrosRecebidos['id'];
       if(this.id){
          this.servicoEquipamentos.getEquipamentoById(this.id)
          .subscribe(respostaComSucesso=>{
            this.equipamento = respostaComSucesso;
          }, respostaComErro=>{
            this.equipamento = new Equipamentos();
          })
       }
     })
  }

  gravarEquipamentos() {
    if (this.id) {
      this.servicoEquipamentos
        .atualizarEquipamento(this.equipamento)
        .subscribe(respostaComSucesso => {
          this.sucesso = true;
          this.errosApi = null;
        }, respostaComErro => {
          this.sucesso = false;
          this.errosApi = respostaComErro.error.erros;
        })
    } else {
      this.servicoEquipamentos
        .salvarEquipamento(this.equipamento)
        .subscribe(respostaComSucesso => {
          this.sucesso = true;
          this.errosApi = null;
          this.equipamento = respostaComSucesso;
        }, respostaComErro => {
          this.sucesso = false;
          this.errosApi = respostaComErro.error.erros;
        })
    }
  }

  voltarParaListagem() {
    this.rota.navigate(['/equipamentosLista']);
  }

}
