import { tipo_pessoa } from "../enums/pessoa.enum";
import { Endereco } from "./endereco.entity";

export class Pessoa {
    id: number;
    nome: string;
    identificacao: string;
    tipo: tipo_pessoa;
    data_nascimento: Date;
    enderecos: Endereco[];
}
