import { Refeicoes } from './nutricao/refeicoes/refeicoes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RefeicoesService {

  constructor(private http: HttpClient) { }

  salvarRefeicoes(refeicoes: Refeicoes) : Observable<Refeicoes>{
    return this.http.post<Refeicoes>('http://localhost:8080/refeicoes',refeicoes);
  }

  getRefeicoes() : Observable<Refeicoes[]>{
    return this.http.get<Refeicoes[]>('http://localhost:8080/refeicoes');
  }

  getRefeicoesById(id:number) : Observable<Refeicoes>{
    return this.http.get<Refeicoes>(`http://localhost:8080/refeicoes/${id}`);
  }

  atualizarRefeicoes(refeicoes: Refeicoes) : Observable<any> {
    return this.http.put<Refeicoes>(`http://localhost:8080/refeicoes/${refeicoes.id}`, refeicoes);
  }

  deletarRefeicoes(refeicoes: Refeicoes) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/refeicoes/${refeicoes.id}`);
  }
}
