import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FisiologiaService } from 'src/app/fisiologia.service';
import { PessoasService } from 'src/app/pessoas.service';
import { Pessoas } from '../../pessoas/pessoas';
import { Fisiologias } from '../fisiologia';

@Component({
  selector: 'app-fisiologia-forms',
  templateUrl: './fisiologia-forms.component.html',
  styleUrls: ['./fisiologia-forms.component.css']
})
export class FisiologiaFormsComponent implements OnInit {

  pessoas : Pessoas [] = [];
  fisiologia : Fisiologias 
  sucesso: boolean = false;
  errosApi: string[];
  id: number;

  constructor(
    private servicoFisiologia : FisiologiaService,
    private rota : Router,
    private servicoPessoa : PessoasService) {
      this.fisiologia =  new Fisiologias();
     }

     ngOnInit(): void {
    
      this.servicoPessoa.getPessoas().subscribe(respostaSucesso => this.pessoas = respostaSucesso);
      }
    
    onSubmit(){
      this.servicoFisiologia
      .salvarFisiolo(this.fisiologia)
      .subscribe(response => {
        this.sucesso = true;
        this.errosApi = null;
        this.fisiologia = new Fisiologias();
      }, errorResponse => {
        this.errosApi = errorResponse.error.erros;
        this.sucesso = false;
      }
        )}
    
    voltarParaListagem() {
      this.rota.navigate(['/treinosLista']);
    }

}
