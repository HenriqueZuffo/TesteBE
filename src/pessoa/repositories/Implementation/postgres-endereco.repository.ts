import { Injectable } from "@nestjs/common";
import { CreateEnderecoDto } from "src/pessoa/dto/create-endereco.dto";
import { UpdateEnderecoDto } from "src/pessoa/dto/update-endereco.dto";
import { Endereco } from "src/pessoa/entities/endereco.entity";
import { EnderecoRepository } from "../endereco.repository";

@Injectable()
export class PostgresEnderecoRepository extends EnderecoRepository{
    async findAll(idPessoa: number): Promise<Endereco[]> {
        return
    }
    async findOne(idPessoa: number, idEndereco: number): Promise<Endereco> {
        return
    }
    async create(endereco: CreateEnderecoDto): Promise<void> {
        return
    }
    async update(idEndereco: number, endereco: UpdateEnderecoDto): Promise<void> {
        return
    }
    async remove(idPessoa: number, idEndereco: number): Promise<void>{
        return
    }

}