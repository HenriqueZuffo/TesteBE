import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePessoaDto } from "src/pessoa/dto/create-pessoa.dto";
import { UpdatePessoaDto } from "src/pessoa/dto/update-pessoa.dto";
import { Pessoa } from "src/pessoa/entities/pessoa.entity";
import { Repository } from "typeorm";
import { PessoaRepository } from "../pessoa.repository";

@Injectable()
export class PostgresPessoaRepository extends PessoaRepository{
    constructor(
        @InjectRepository(Pessoa)
        private readonly pessoaRepository: Repository<Pessoa>
    ){super()}
    
    async create(pessoa: CreatePessoaDto): Promise<number> {
        const pessoa_criada = await this.pessoaRepository.save(pessoa)
        return pessoa_criada.id
    }
    
    async findAll(): Promise<Pessoa[]> {        
        return await this.pessoaRepository.find()
    }
    
    async findOne(id: number): Promise<Pessoa> {
        return await this.pessoaRepository.findOne({ where: {id} })
    }
    
    async update(id: number, pessoa: UpdatePessoaDto): Promise<void> {
        await this.pessoaRepository.update({id}, {...pessoa})
        return 
    }
    
    async remove(id: number): Promise<void> {
        await this.pessoaRepository.delete({id: id})
        return   
    }

}