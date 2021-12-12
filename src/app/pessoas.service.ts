
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoas } from './registros/pessoas/pessoas';


@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private http: HttpClient) {  }

  salvarPessoa(pessoa: Pessoas ) : Observable<Pessoas>{
    return this.http.post<Pessoas>('http://localhost:8080/pessoa/',pessoa);
  }

  getPessoas() : Observable<Pessoas[]>{
    return this.http.get<Pessoas[]>('http://localhost:8080/pessoa/');
  }

  getPessoaById(id:number) : Observable<Pessoas>{
    return this.http.get<Pessoas>(`http://localhost:8080/pessoa/${id}`);
  }

  atualizarPessoa(pessoa: Pessoas) : Observable<any> {
    return this.http.put<Pessoas>(`http://localhost:8080/pessoa/${pessoa.id}`, pessoa);
  }

  deletarPessoa(pessoa: Pessoas) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/pessoa/${pessoa.id}`);
  }
}
