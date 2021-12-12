import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dietas } from './nutricao/dieta/dietas';

@Injectable({
  providedIn: 'root'
})
export class DietaService {

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
}
