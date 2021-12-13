import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fisiologias } from './registros/fisiologia/fisiologia';
import { buscaFisiologia } from './registros/fisiologia/fisiologia-list/buscaFisiologia';


@Injectable({
  providedIn: 'root'
})
export class FisiologiaService {
  apiURLFisio: string = environment.apiURLBrase + "/fisiologia";

constructor(private http: HttpClient) { 

}

salvarFisiolo(fisiologia: Fisiologias) : Observable<Fisiologias>{
  return this.http.post<Fisiologias>(this.apiURLFisio,fisiologia);
}


getFisiolo() : Observable<Fisiologias[]>{
  return this.http.get<Fisiologias[]>(this.apiURLFisio);
}

getFisioloById(id:number) : Observable<Fisiologias>{
  return this.http.get<Fisiologias>(`http://localhost:8080/fisiologia/${id}`);
}

atualizarFisiologia(fisiologia: Fisiologias) : Observable<any> {
  return this.http.put<Fisiologias>(`http://localhost:8080/fisiologia/${fisiologia.id}`, fisiologia);
}

deletarFisiologia(fisiologia: Fisiologias) : Observable<any> {
  return this.http.delete<any>(`http://localhost:8080/fisiologia/${fisiologia.id}`);
}
buscarFisiologia(nome: string) : Observable<buscaFisiologia[]>{
  if(!nome){
    nome = "";
  }
  const httpParams = new HttpParams().set("nome",nome);
  console.log(nome)
  const url = this.apiURLFisio + "?" + httpParams.toString();
  console.log(url)
  return this.http.get<any>(url);
}

}
