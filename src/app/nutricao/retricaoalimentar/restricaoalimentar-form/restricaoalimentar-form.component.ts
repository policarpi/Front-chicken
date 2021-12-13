import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RestricaoalimentarService } from 'src/app/restricaoalimentar.service';
import { RestricaoAlimentar } from '../restricaoalimentar';

@Component({
  selector: 'app-restricaoalimentar-form',
  templateUrl: './restricaoalimentar-form.component.html',
  styleUrls: ['./restricaoalimentar-form.component.css']
})
export class RestricaoalimentarFormComponent implements OnInit {

  restricaoAlimentar: RestricaoAlimentar;
  sucesso: boolean = false;
  errosApi: string[];
  id: number;

  constructor(private serviceRestricaoAlimentar: RestricaoalimentarService,
              private minhaRota: Router,
              private rotaAtiva: ActivatedRoute) {
    this.restricaoAlimentar = new RestricaoAlimentar();
  }

  ngOnInit(): void {

     let params: Observable<Params>=this.rotaAtiva.params;

     params.subscribe(parametrosRecebidos=>{
       this.id = parametrosRecebidos['id'];
       if(this.id){
          this.serviceRestricaoAlimentar.getRestricaoAlimentarById(this.id)
          .subscribe(respostaComSucesso=>{
            this.restricaoAlimentar = respostaComSucesso;
          }, respostaComErro=>{
            this.restricaoAlimentar = new RestricaoAlimentar();
          })
       }
     })
  }

  gravarRestricaoAlimentar() {
    if (this.id) {
      this.serviceRestricaoAlimentar
        .atualizarRestricaoAlimentar(this.restricaoAlimentar)
        .subscribe(respostaComSucesso => {
          this.sucesso = true;
          this.errosApi = null;
        }, respostaComErro => {
          this.sucesso = false;
          this.errosApi = respostaComErro.error.erros;
        })
    } else {
      this.serviceRestricaoAlimentar
        .salvarRestricaoAlimentar(this.restricaoAlimentar)
        .subscribe(respostaComSucesso => {
          this.sucesso = true;
          this.errosApi = null;
          this.restricaoAlimentar = respostaComSucesso;
        }, respostaComErro => {
          this.sucesso = false;
          this.errosApi = respostaComErro.error.erros;
        })
    }
  }

  voltarParaListagem() {
    this.minhaRota.navigate(['/restricaoAlimentarLista']);
  }

}
