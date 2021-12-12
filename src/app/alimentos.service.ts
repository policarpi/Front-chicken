import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alimentos } from './nutricao/alimentos/alimentos';


@Injectable({
  providedIn: 'root'
})
export class AlimentosService {

  constructor(private http: HttpClient) { }

  salvarAlimento(alimento: Alimentos) : Observable<Alimentos>{
    return this.http.post<Alimentos>('http://localhost:8080/alimentos',alimento);
  }

  getAlimentos() : Observable<Alimentos[]>{
    return this.http.get<Alimentos[]>('http://localhost:8080/alimentos');
  }

  getAlimentoById(id:number) : Observable<Alimentos>{
    return this.http.get<Alimentos>(`http://localhost:8080/alimentos/${id}`);
  }

  atualizarAlimento(alimento: Alimentos) : Observable<any> {
    return this.http.put<Alimentos>(`http://localhost:8080/alimentos/${alimento.id}`, alimento);
  }

  deletarAlimento(alimento: Alimentos) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/alimentos/${alimento.id}`);
  }
}
