import { Endereco } from "../entities/endereco.entity";
import { tipo_pessoa } from "../enums/pessoa.enum";

export class CreatePessoaDto {
    nome: string;
    identificacao: string;
    tipo: tipo_pessoa;
    data_nascimento: Date;
    enderecos: Endereco[];    
}
