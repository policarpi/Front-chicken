import { AlimentosRestricaoBusca } from './nutricao/alimentosrestricao/alimentosrestricao-lista/alimentosRestricaoBusca';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlimentosRestricao } from './nutricao/alimentosrestricao/alimentosrestricao';

@Injectable({
  providedIn: 'root'
})
export class AlimentosRestricaoService {

  constructor(private http : HttpClient) { }

  salvarAlimentosRestricao( alimentosRestricao : AlimentosRestricao) : Observable<AlimentosRestricao>{
    return this.http.post<AlimentosRestricao>('http://localhost:8080/alimentosrestricao/',alimentosRestricao);
  }

  buscar(nome: string): Observable<AlimentosRestricaoBusca[]>{
    if(!nome){
      nome="";
    }
    const httpParams = new HttpParams().set("nome", nome);

    const urlDeBusca = "http://localhost:8080/alimentosrestricao/" + '?' + httpParams.toString();
    return this.http.get<any>(urlDeBusca);


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
