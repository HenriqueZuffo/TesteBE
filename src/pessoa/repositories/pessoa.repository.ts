import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from '../dto/create-pessoa.dto';
import { UpdatePessoaDto } from '../dto/update-pessoa.dto';
import { Pessoa } from '../entities/pessoa.entity';

@Injectable()
export abstract class PessoaRepository {
  abstract create(pessoa: CreatePessoaDto): Promise<Pessoa>;
  abstract findAll(): Promise<Pessoa[]>;
  abstract findOne(id: number): Promise<Pessoa>;
  abstract update(id: number, pessoa: UpdatePessoaDto): Promise<void>;
  abstract remove(id: number): Promise<void>;
}
