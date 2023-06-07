import { Injectable, Inject } from '@nestjs/common';
import { CreatePessoaDto } from 'src/pessoa/dto/create-pessoa.dto';
import { UpdatePessoaDto } from 'src/pessoa/dto/update-pessoa.dto';
import { Pessoa } from 'src/pessoa/entities/pessoa.entity';
import { Repository } from 'typeorm';
import { PessoaRepository } from '../pessoa.repository';

@Injectable()
export class PostgresPessoaRepository extends PessoaRepository {
  constructor(
    @Inject('PESSOA_REPOSITORY')
    private readonly pessoaRepository: Repository<Pessoa>,
  ) {
    super();
  }

  async create(pessoa: CreatePessoaDto): Promise<Pessoa> {
    return await this.pessoaRepository.save(pessoa);
  }

  async findAll(): Promise<Pessoa[]> {
    return await this.pessoaRepository.find({ relations: ['enderecos'] });
  }

  async findOne(id: number): Promise<Pessoa> {
    return await this.pessoaRepository.findOne({ where: { id } });
  }

  async update(id: number, pessoa: UpdatePessoaDto): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { enderecos, ...resto } = pessoa;
    if (!resto || !resto.id) return;
    await this.pessoaRepository.update({ id }, { ...resto });
    return;
  }

  async remove(id: number): Promise<void> {
    await this.pessoaRepository.delete({ id: id });
    return;
  }
}
