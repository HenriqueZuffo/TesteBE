import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateEnderecoDto } from "src/pessoa/dto/create-endereco.dto";
import { UpdateEnderecoDto } from "src/pessoa/dto/update-endereco.dto";
import { Endereco } from "src/pessoa/entities/endereco.entity";
import { Pessoa } from "src/pessoa/entities/pessoa.entity";
import { Repository } from "typeorm";
import { EnderecoRepository } from "../endereco.repository";

@Injectable()
export class PostgresEnderecoRepository extends EnderecoRepository{
    constructor(
        @InjectRepository(Endereco) 
        private readonly enderecoRepository: Repository<Endereco>
    ){ super()}

    async findAll(pessoa: Pessoa): Promise<Endereco[]> {
        return await this.enderecoRepository.findBy({pessoa: pessoa})
    }
    async findOne(pessoa: Pessoa, idEndereco: number): Promise<Endereco> {
        return this.enderecoRepository.findOne({where: {pessoa: pessoa, id: idEndereco}})
    }
    async create(endereco: CreateEnderecoDto): Promise<void> {
        await this.enderecoRepository.save(endereco)
        return
    }
    async update(idEndereco: number, endereco: UpdateEnderecoDto): Promise<void> {
        await this.enderecoRepository.update(idEndereco, {...endereco})
        return
    }
    async remove(pessoa: Pessoa, idEndereco: number): Promise<void>{
        await this.enderecoRepository.delete({id: idEndereco, pessoa: pessoa})
        return
    }
    async removeAll(pessoa: Pessoa): Promise<void>{
        await this.enderecoRepository.delete({pessoa: pessoa})
        return
    }

}