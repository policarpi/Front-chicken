import { EquipamentosService } from './../../../equipamentos.service';
import { Component, OnInit } from '@angular/core';
import { Equipamentos } from '../equipamentos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipamentos-lista',
  templateUrl: './equipamentos-lista.component.html',
  styleUrls: ['./equipamentos-lista.component.css']
})
export class EquipamentosListaComponent implements OnInit {

  equipamentos: Equipamentos[] = [];
  equipamentoSelecionado: Equipamentos;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private servicoEquipamentos: EquipamentosService,
    private rota: Router) { }

  ngOnInit(): void {
    this.servicoEquipamentos.getEquipamentos()
      .subscribe(respostaComSucesso => {
        this.equipamentos = respostaComSucesso;
      })
  }

  novoCadastro() {
    this.rota.navigate(['/equipamentosForm'])
  }

  preparaDelecao(equipamento: Equipamentos) {
    this.equipamentoSelecionado = equipamento;
  }

  deletarEquipamento() {
    this.servicoEquipamentos
      .deletarEquipamento(this.equipamentoSelecionado)
      .subscribe(
        respostaSucesso => {
          this.mensagemSucesso = 'Registro deletado com sucesso!';
          this.mensagemErro = null;
          this.ngOnInit();
        },
        respostaErro => {
          this.mensagemSucesso = null;
          this.mensagemErro = 'Ocorreu um erro ao deletar o equipamento selecionado!';
        }
      )
  }

}
