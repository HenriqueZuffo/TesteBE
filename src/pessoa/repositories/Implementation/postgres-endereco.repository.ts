import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateEnderecoDto } from "src/pessoa/dto/create-endereco.dto";
import { UpdateEnderecoDto } from "src/pessoa/dto/update-endereco.dto";
import { Endereco } from "src/pessoa/entities/endereco.entity";
import { Repository } from "typeorm";
import { EnderecoRepository } from "../endereco.repository";

@Injectable()
export class PostgresEnderecoRepository extends EnderecoRepository{
    constructor(
        @InjectRepository(Endereco) 
        private readonly enderecoRepository: Repository<Endereco>
    ){ super()}

    async findAll(idPessoa: number): Promise<Endereco[]> {
        return this.enderecoRepository.find({where: {pessoa: idPessoa}})
    }
    async findOne(idPessoa: number, idEndereco: number): Promise<Endereco> {
        return this.enderecoRepository.findOne({where: {pessoa: idPessoa, id: idEndereco}})
    }
    async create(endereco: CreateEnderecoDto): Promise<void> {
        await this.enderecoRepository.save(endereco)
        return
    }
    async update(idEndereco: number, endereco: UpdateEnderecoDto): Promise<void> {
        await this.enderecoRepository.update(idEndereco, {...endereco})
        return
    }
    async remove(idPessoa: number, idEndereco: number): Promise<void>{
        await this.enderecoRepository.delete({id: idEndereco, pessoa: idPessoa})
        return
    }

}