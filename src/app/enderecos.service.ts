import { BuscaEndereco } from './registros/enderecos/enderecos-lista/buscaEndereco';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  buscarEnderecos(nome: string) : Observable<BuscaEndereco[]>{
    if(!nome){
      nome = "";
    }
    const httpParams = new HttpParams().set("nome", nome);

    const urlDeBusca = "http://localhost:8080/endereco/" + '?' + httpParams.toString();
    return this.http.get<any>(urlDeBusca);

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
