import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EquipamentosService } from 'src/app/equipamentos.service';
import { PessoasService } from 'src/app/pessoas.service';
import { Pessoas } from 'src/app/registros/pessoas/pessoas';
import { TreinosService } from 'src/app/treinos.service';
import { Equipamentos } from '../../equipamentos/equipamentos';
import { Treinos } from '../treinos';

@Component({
  selector: 'app-treinos-form',
  templateUrl: './treinos-form.component.html',
  styleUrls: ['./treinos-form.component.css']
})
export class TreinosFormComponent implements OnInit {

  pessoas : Pessoas [] = [];
  equipamentos: Equipamentos [] = [];
  treinos: Treinos;
  sucesso: boolean = false;
  errosApi: string[];
  id: number;

  constructor(private servicoTreinos: TreinosService,
              private rota: Router,
              private rotaAtiva: ActivatedRoute,
              private servicoPessoa: PessoasService,
              private servicoEquipamento: EquipamentosService) {
    this.treinos = new Treinos();
  }

  ngOnInit(): void {
    
    this.servicoPessoa.getPessoas().subscribe(respostaSucesso => this.pessoas = respostaSucesso);
    this.servicoEquipamento.getEquipamentos().subscribe(respostaSucesso =>this.equipamentos = respostaSucesso);
    let params: Observable<Params>=this.rotaAtiva.params;

     params.subscribe(parametrosRecebidos=>{
       this.id = parametrosRecebidos['id'];
       if(this.id){
          this.servicoTreinos.getTreinoById(this.id)
          .subscribe(respostaComSucesso=>{
            this.treinos = respostaComSucesso;
          }, respostaComErro=>{
            this.treinos = new Treinos();
          })
       }
     })
  }

  gravarTreinos() {
    if (this.id) {
      this.servicoTreinos
        .atualizarTreino(this.treinos)
        .subscribe(respostaComSucesso => {
          this.sucesso = true;
          this.errosApi = null;
        }, respostaComErro => {
          this.sucesso = false;
          this.errosApi = respostaComErro.error.erros;
        })
    } else {
      this.servicoTreinos
        .salvarTreino(this.treinos)
        .subscribe(respostaComSucesso => {
          this.sucesso = true;
          this.errosApi = null;
          this.treinos = respostaComSucesso;
        }, respostaComErro => {
          this.sucesso = false;
          this.errosApi = respostaComErro.error.erros;
        })
    }
  }

  voltarParaListagem() {
    this.rota.navigate(['/treinosLista']);
  }

}
