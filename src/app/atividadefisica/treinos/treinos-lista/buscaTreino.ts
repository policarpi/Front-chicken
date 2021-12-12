
import { Pessoas } from "src/app/registros/pessoas/pessoas";
import { Equipamentos } from "../../equipamentos/equipamentos";

export class buscaTreino{

    id: number;
    dataNota: string;
    equipamento:  Equipamentos;
    pessoa : Pessoas;
    quantidade: number;
    repeticao: number;
    peso: number;
    ficha: string;
}