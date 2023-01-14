import { HttpException, Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PessoaRepository } from './repositories/pessoa.repository';

@Injectable()
export class PessoaService {

  constructor(private readonly pessoaRepository: PessoaRepository){};

  async create(createPessoaDto: CreatePessoaDto) {
    return this.pessoaRepository.create(createPessoaDto);
  }

  async findAll() {
    return this.pessoaRepository.findAll();
  }

  async findOne(id: number) {
    return this.pessoaRepository.findOne(id);
  }

  async update(id: number, updatePessoaDto: UpdatePessoaDto) {
    return this.pessoaRepository.update(id, updatePessoaDto);
  }

  async remove(id: number) {
    return this.pessoaRepository.remove(id);
  }
}
