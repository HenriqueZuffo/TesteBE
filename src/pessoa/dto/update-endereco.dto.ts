import { tipo_endereco } from "../enums/endereco.enum";

export class UpdateEnderecoDto{
    id: number;
    id_pessoa: number;
    cep: string;
    logradouro: string;
    numero: number;
    bairro: string;
    complemento: string;
    cidade: string;
    uf: string;
    tipo: tipo_endereco;   
}