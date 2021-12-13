import { Pessoas } from "src/app/registros/pessoas/pessoas";
import { Alimentos } from "../../alimentos/alimentos";
import { Refeicoes } from "../../refeicoes/refeicoes";


export class buscaDieta{
    id: number;
    pessoa : Pessoas;
    alimento : Alimentos;
    refeicao : Refeicoes;
    quantidade: number;
}