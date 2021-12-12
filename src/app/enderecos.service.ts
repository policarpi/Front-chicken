import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from './registros/enderecos/enderecos';

@Injectable({
  providedIn: 'root'
})
export class EnderecosService {

  constructor(private http:HttpClient) {}

  salvarEndereco(endereco: Endereco) : Observable<Endereco>{
    return this.http.post<Endereco>('http://localhost:8080/endereco',endereco);
  }

  getEndereco() : Observable<Endereco[]>{
    return this.http.get<Endereco[]>('http://localhost:8080/endereco');
  }

  getEnderecoById(id:number) : Observable<Endereco>{
    return this.http.get<Endereco>(`http://localhost:8080/endereco/${id}`);
  }

  atualizarEndereco(endereco: Endereco) : Observable<any> {
    return this.http.put<Endereco>(`http://localhost:8080/endereco/${endereco.id}`, endereco);
  }

  deletarEndereco(endereco: Endereco) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/endereco/${endereco.id}`);
  }
}
