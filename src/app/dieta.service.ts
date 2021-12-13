import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { buscaDieta } from './nutricao/dieta/dieta-lista/buscaDieta';
import { Dietas } from './nutricao/dieta/dietas';

@Injectable({
  providedIn: 'root'
})
export class DietaService {
  
  apiURLDieta: string = environment.apiURLBrase + "/dieta";


  constructor(private http: HttpClient) {

  }

  salvarDieta(dieta: Dietas) : Observable<Dietas>{
    return this.http.post<Dietas>('http://localhost:8080/dieta',dieta);
  }

  getDieta() : Observable<Dietas[]>{
    return this.http.get<Dietas[]>('http://localhost:8080/dieta');
  }

  getDietaById(id:number) : Observable<Dietas>{
    return this.http.get<Dietas>(`http://localhost:8080/dieta/${id}`);
  }

  atualizarDieta(dieta: Dietas) : Observable<any> {
    return this.http.put<Dietas>(`http://localhost:8080/dieta/${dieta.id}`, dieta);
  }

  deletarDieta(dieta: Dietas) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/dieta/${dieta.id}`);
  }

  buscarDieta(nome: string) : Observable<buscaDieta[]>{
    if(!nome){
      nome = "";
    }
    const httpParams = new HttpParams().set("nome",nome);
    console.log(nome)
    const url = this.apiURLDieta + "?" + httpParams.toString();
    console.log(url)
    return this.http.get<any>(url);
  }

}
