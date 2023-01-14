import { Injectable } from "@nestjs/common";
import { CreateEnderecoDto } from "../dto/create-endereco.dto";
import { UpdateEnderecoDto } from "../dto/update-endereco.dto";
import { Endereco } from "../entities/endereco.entity";

@Injectable()
export abstract class EnderecoRepository{
   abstract findAll(idPessoa: number):  Promise<Endereco[]>;
   abstract findOne(idPessoa: number, idEndereco: number): Promise<Endereco>;
   abstract create(endereco: CreateEnderecoDto): Promise<void>;
   abstract update(idEndereco: number, endereco: UpdateEnderecoDto): Promise<void>;
   abstract remove(idPessoa: number, idEndereco: number): Promise<void>;
}