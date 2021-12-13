import { RestricaoAlimentar } from './../restricaoalimentar';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestricaoalimentarService } from 'src/app/restricaoalimentar.service';

@Component({
  selector: 'app-restricaoalimentar-lista',
  templateUrl: './restricaoalimentar-lista.component.html',
  styleUrls: ['./restricaoalimentar-lista.component.css']
})
export class RestricaoalimentarListaComponent implements OnInit {

  restricoesAlimentares: RestricaoAlimentar[] = [];
  restricoesAlimentarSelecionada: RestricaoAlimentar;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private service: RestricaoalimentarService,
    private rota: Router) { }

  ngOnInit(): void {
    this.service.getRestricaoAlimentar()
      .subscribe(respostaComSucesso => {
        this.restricoesAlimentares = respostaComSucesso;
      })
  }

  novoCadastro() {
    this.rota.navigate(['/restricaoAlimentarForm'])
  }

  preparaDelecao(restricao: RestricaoAlimentar) {
    this.restricoesAlimentarSelecionada = restricao;
  }

  deletarRestricao() {
    this.service
      .deletarRestricaoAlimentar(this.restricoesAlimentarSelecionada)
      .subscribe(
        respostaSucesso => {
          this.mensagemSucesso = 'Restrição deletada com sucesso!';
          this.mensagemErro = null;
          this.ngOnInit();
        },
        respostaErro => {
          this.mensagemSucesso = null;
          this.mensagemErro = 'Ocorreu um erro ao deletar a restrição selecionada!';
        }
      )
  }

}
