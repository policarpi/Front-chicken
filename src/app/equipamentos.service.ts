import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipamentos } from './atividadefisica/equipamentos/equipamentos';


@Injectable({
  providedIn: 'root'
})
export class EquipamentosService {

  constructor(private http: HttpClient) { }

  salvarEquipamento(equipamento: Equipamentos) : Observable<Equipamentos>{
    return this.http.post<Equipamentos>('http://localhost:8080/equipamentos/',equipamento);
  }

  getEquipamentos() : Observable<Equipamentos[]>{
    return this.http.get<Equipamentos[]>('http://localhost:8080/equipamentos/');
  }

  getEquipamentoById(id:number) : Observable<Equipamentos>{
    return this.http.get<Equipamentos>(`http://localhost:8080/equipamentos/${id}`);
  }

  atualizarEquipamento(equipamento: Equipamentos) : Observable<any> {
    return this.http.put<Equipamentos>(`http://localhost:8080/equipamentos/${equipamento.id}`, equipamento);
  }

  deletarEquipamento(equipamento: Equipamentos) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/equipamentos/${equipamento.id}`);
  }
}
