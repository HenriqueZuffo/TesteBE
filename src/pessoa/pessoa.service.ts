import { HttpException, Injectable } from '@nestjs/common';
import { Utils } from 'src/app.utils';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PessoaRepository } from './repositories/pessoa.repository';

@Injectable()
export class PessoaService {

  constructor(private readonly pessoaRepository: PessoaRepository){};

  async create(createPessoaDto: CreatePessoaDto) {
    createPessoaDto.identificacao = Utils.apenasNumeros(createPessoaDto.identificacao)
    return this.pessoaRepository.create(createPessoaDto);
  }

  async findAll() {
    return this.pessoaRepository.findAll();
  }

  async findOne(id: number) {
    return this.pessoaRepository.findOne(id);
  }

  async update(id: number, updatePessoaDto: UpdatePessoaDto) {
    if(updatePessoaDto?.identificacao) updatePessoaDto.identificacao = Utils.apenasNumeros(updatePessoaDto.identificacao) 

    return this.pessoaRepository.update(id, updatePessoaDto);
  }

  async remove(id: number) {
    return this.pessoaRepository.remove(id);
  }
}
