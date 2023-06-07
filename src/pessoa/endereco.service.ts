import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Pessoa } from './entities/pessoa.entity';
import { EnderecoRepository } from './repositories/endereco.repository';

@Injectable()
export class EnderecoService {
  constructor(private readonly enderecoRepository: EnderecoRepository) {}

  async findAll(pessoa: Pessoa) {
    return this.enderecoRepository.findAll(pessoa);
  }

  async findOne(pessoa: Pessoa, idEndereco: number) {
    return this.enderecoRepository.findOne(pessoa, idEndereco);
  }

  async create(pessoa: Pessoa, endereco: CreateEnderecoDto) {
    endereco.pessoa = pessoa;
    return this.enderecoRepository.create(endereco);
  }

  async update(idEndereco: number, endereco: UpdateEnderecoDto) {
    return this.enderecoRepository.update(idEndereco, endereco);
  }

  async remove(pessoa: Pessoa, idEndereco: number) {
    return this.enderecoRepository.remove(pessoa, idEndereco);
  }

  async removeAll(pessoa: Pessoa) {
    return this.enderecoRepository.removeAll(pessoa);
  }
}
