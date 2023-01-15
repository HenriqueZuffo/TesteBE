import { Injectable } from "@nestjs/common";
import { CreateEnderecoDto } from "../dto/create-endereco.dto";
import { UpdateEnderecoDto } from "../dto/update-endereco.dto";
import { Endereco } from "../entities/endereco.entity";
import { Pessoa } from "../entities/pessoa.entity";

@Injectable()
export abstract class EnderecoRepository{
   abstract findAll(pessoa: Pessoa):  Promise<Endereco[]>;
   abstract findOne(pessoa: Pessoa, idEndereco: number): Promise<Endereco>;
   abstract create(endereco: CreateEnderecoDto): Promise<void>;
   abstract update(idEndereco: number, endereco: UpdateEnderecoDto): Promise<void>;
   abstract remove(pessoa: Pessoa, idEndereco: number): Promise<void>;
   abstract removeAll(pessoa: Pessoa): Promise<void>;
}