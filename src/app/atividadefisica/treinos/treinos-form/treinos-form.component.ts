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
              private servicoPessoa: PessoasService,
              private servicoEquipamento: EquipamentosService) {
    this.treinos = new Treinos();
  }

  ngOnInit(): void {
    
    this.servicoPessoa.getPessoas().subscribe(respostaSucesso => this.pessoas = respostaSucesso);
    this.servicoEquipamento.getEquipamentos().subscribe(respostaSucesso =>this.equipamentos = respostaSucesso);
  }
  onSubmit(){
    this.servicoTreinos
    .salvarTreino(this.treinos)
    .subscribe(response => {
      this.sucesso = true;
      this.errosApi = null;
      this.treinos = new Treinos();
    }, errorResponse => {
      this.errosApi = errorResponse.error.erros;
      this.sucesso = false;
    }
      )}
  
  voltarParaListagem() {
    this.rota.navigate(['/treinosLista']);
  }

}
