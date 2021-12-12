import { Treinos } from './atividadefisica/treinos/treinos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreinosService {

  constructor(private http: HttpClient) { }

  salvar(treinos: Treinos ) : Observable<Treinos>{
    return this.http.post<Treinos>('http://localhost:8080/treinos',treinos);
  }

  getPessoas() : Observable<Treinos[]>{
    return this.http.get<Treinos[]>('http://localhost:8080/treinos');
  }

  getPessoaById(id:number) : Observable<Treinos>{
    return this.http.get<Treinos>(`http://localhost:8080/treinos/${id}`);
  }

  atualizarPessoa(treinos: Treinos) : Observable<any> {
    return this.http.put<Treinos>(`http://localhost:8080/treinos/${treinos.id}`, treinos);
  }

  deletarPessoa(treinos: Treinos) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/treinos/${treinos.id}`);
  }
}
