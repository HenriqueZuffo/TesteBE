import { HttpException, Injectable } from "@nestjs/common";
import { CreatePessoaDto } from "src/pessoa/dto/create-pessoa.dto";
import { UpdatePessoaDto } from "src/pessoa/dto/update-pessoa.dto";
import { Pessoa } from "src/pessoa/entities/pessoa.entity";
import { PessoaRepository } from "../pessoa.repository";

@Injectable()
export class PostgresPessoaRepository extends PessoaRepository{
    async create(pessoa: CreatePessoaDto): Promise<number> {
        return 
    }
    
    async findAll(): Promise<Pessoa[]> {        
        return 
    }
    
    async findOne(id: number): Promise<Pessoa> {
        return
    }
    
    async update(id: number, pessoa: UpdatePessoaDto): Promise<void> {
        return
    }
    
    async remove(id: number): Promise<void> {
        return 
    }

}