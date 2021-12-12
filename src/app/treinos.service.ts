import { Treinos } from './atividadefisica/treinos/treinos';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { buscaTreino } from './atividadefisica/treinos/treinos-lista/buscaTreino';

@Injectable({
  providedIn: 'root'
})
export class TreinosService {

  apiURLTreinos: string = environment.apiURLBrase + "/treinos";

  constructor(private http: HttpClient) { 

  }

  salvarTreino(treinos: Treinos ) : Observable<Treinos>{
    return this.http.post<Treinos>(this.apiURLTreinos,treinos);
  }


  getTreino() : Observable<Treinos[]>{
    return this.http.get<Treinos[]>(this.apiURLTreinos);
  }

  getTreinoById(id:number) : Observable<Treinos>{
    return this.http.get<Treinos>(`http://localhost:8080/treinos/${id}`);
  }

  atualizarTreino(treinos: Treinos) : Observable<any> {
    return this.http.put<Treinos>(`http://localhost:8080/treinos/${treinos.id}`, treinos);
  }

  deletarTreino(treinos: Treinos) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/treinos/${treinos.id}`);
  }

  buscarTreinos(nome: string) : Observable<buscaTreino[]>{
    if(!nome){
      nome = "";
    }
    const httpParams = new HttpParams().set("nome",nome);
    console.log(nome)
    const url = this.apiURLTreinos + "?" + httpParams.toString();
    console.log(url)
    return this.http.get<any>(url);
  }


}
