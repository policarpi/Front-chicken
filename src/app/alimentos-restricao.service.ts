import { AlimentosRestricaoBusca } from './nutricao/alimentosrestricao/alimentosrestricao-lista/alimentosRestricaoBusca';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlimentosRestricao } from './nutricao/alimentosrestricao/alimentosrestricao';
import { environment } from 'src/environments/environment';
import { buscaAlimentosRestricao } from './nutricao/alimentosrestricao/alimentosrestricao-lista/buscaAlimentosRestricao';

@Injectable({
  providedIn: 'root'
})
export class AlimentosRestricaoService {

  apiURLAlimentosRestricao: string = environment.apiURLBrase + "/alimentosrestricao";

  constructor(private http : HttpClient) { }

  salvarAlimentosRestricao( alimentosRestricao : AlimentosRestricao) : Observable<AlimentosRestricao>{
    return this.http.post<AlimentosRestricao>('http://localhost:8080/alimentosrestricao/',alimentosRestricao);
  }

  
  buscarAlimentosRestricao(nome: string) : Observable<buscaAlimentosRestricao[]>{
    if(!nome){
      nome = "";
    }
    const httpParams = new HttpParams().set("nome",nome);
    console.log(nome)
    const url = this.apiURLAlimentosRestricao + "?" + httpParams.toString();
    console.log(url)
    return this.http.get<any>(url);
  }

  getAlimentosRestricao() : Observable<AlimentosRestricao[]>{

    return this.http.get<AlimentosRestricao[]>('http://localhost:8080/alimentosrestricao');
  }

  getAlimentosRestricaoById(id:number) : Observable<AlimentosRestricao>{
    return this.http.get<AlimentosRestricao>(`http://localhost:8080/alimentosrestricao/${id}`);
  }

  atualizarAlimentosRestricao(alimentosRestricao: AlimentosRestricao) : Observable<any> {
    return this.http.put<AlimentosRestricao>(`http://localhost:8080/alimentosrestricao/${alimentosRestricao.id}`, alimentosRestricao);
  }

  deletarAlimentosRestricao(alimentosRestricao: AlimentosRestricao) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/alimentosrestricao/${alimentosRestricao.id}`);
  }
}
