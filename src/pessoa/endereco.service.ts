import { Injectable } from "@nestjs/common";
import { CreateEnderecoDto } from "./dto/create-endereco.dto";
import { UpdateEnderecoDto } from "./dto/update-endereco.dto";
import { EnderecoRepository } from "./repositories/endereco.repository";

@Injectable()
export class EnderecoService{
    constructor(private readonly enderecoRepository: EnderecoRepository){}
    
    async findAll(idPessoa: number){
        return this.enderecoRepository.findAll(idPessoa)
    }

    async findOne(idPessoa: number, idEndereco: number){
        return this.enderecoRepository.findOne(idPessoa, idEndereco)
    }
    
    async create(idPessoa: number, endereco: CreateEnderecoDto){
        endereco.pessoa = idPessoa;

        return this.enderecoRepository.create(endereco)
    }

    async update(idEndereco: number, endereco: UpdateEnderecoDto){
        return this.enderecoRepository.update(idEndereco, endereco)
    }

    async remove(idPessoa: number, idEndereco: number){
        return this.enderecoRepository.remove(idPessoa, idEndereco)
    }
}