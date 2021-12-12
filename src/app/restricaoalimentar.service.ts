import { RestricaoAlimentar } from './nutricao/retricaoalimentar/restricaoalimentar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestricaoalimentarService {

  constructor(private http: HttpClient) { }

  salvarRestricaoAlimentar( restricaoAlimentar : RestricaoAlimentar) : Observable<RestricaoAlimentar>{
    return this.http.post<RestricaoAlimentar>('http://localhost:8080/restricaoalimentar/',restricaoAlimentar);
  }

  getRestricaoAlimentar() : Observable<RestricaoAlimentar[]>{
    return this.http.get<RestricaoAlimentar[]>('http://localhost:8080/restricaoalimentar');
  }

  getRestricaoAlimentarById(id:number) : Observable<RestricaoAlimentar>{
    return this.http.get<RestricaoAlimentar>(`http://localhost:8080/restricaoalimentar/${id}`);
  }

  atualizarRestricaoAlimentar(restricaoAlimentar: RestricaoAlimentar) : Observable<any> {
    return this.http.put<RestricaoAlimentar>(`http://localhost:8080/restricaoalimentar/${restricaoAlimentar.id}`, restricaoAlimentar);
  }

  deletarRestricaoAlimentar(restricaoAlimentar: RestricaoAlimentar) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/restricaoalimentar/${restricaoAlimentar.id}`);
  }
}
