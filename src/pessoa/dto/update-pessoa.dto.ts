import { Endereco } from '../entities/endereco.entity';
import { tipo_pessoa } from '../enums/pessoa.enum';

export class UpdatePessoaDto{
    nome?: string;
    identificacao?: string;
    tipo?: tipo_pessoa;
    data_nascimento?: Date;
    enderecos?: Endereco[]; 
}