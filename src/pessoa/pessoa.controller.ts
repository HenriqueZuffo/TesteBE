import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpStatus,
  HttpException,
  HttpCode,
} from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Response } from 'express';
import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';

@Controller('pessoa')
export class PessoaController {
  constructor(
    private readonly pessoaService: PessoaService,
    private readonly enderecoService: EnderecoService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createPessoaDto: CreatePessoaDto, res: Response) {
    try {
      const pessoaCriada = await this.pessoaService.create(createPessoaDto);
      createPessoaDto.enderecos?.map(
        async (end) => await this.enderecoService.create(pessoaCriada, end),
      );
      return pessoaCriada.id;
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).json(err);
    }
  }

  @Get()
  async findAll() {
    const pessoas = await this.pessoaService.findAll();

    if (!pessoas || pessoas.length <= 0) {
      throw new HttpException(
        'Nenhuma pessoa foi encontrada!',
        HttpStatus.NOT_FOUND,
      );
    }

    return pessoas;
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const pessoa = await this.pessoaService.findOne(id);

    if (!pessoa) {
      throw new HttpException('Pessoa não encontrada!', HttpStatus.NOT_FOUND);
    }

    pessoa.enderecos = await this.enderecoService.findAll(pessoa);
    return pessoa;
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updatePessoaDto: UpdatePessoaDto,
  ) {
    const pessoa = await this.pessoaService.findOne(id);

    if (!pessoa) {
      throw new HttpException(
        'Pessoa informada inválida!',
        HttpStatus.NOT_FOUND,
      );
    }

    updatePessoaDto.enderecos?.map(async (end) => {
      !end.id
        ? await this.enderecoService.create(pessoa, end as CreateEnderecoDto)
        : await this.enderecoService.update(end.id, end as UpdateEnderecoDto);
    });

    await this.pessoaService.update(id, updatePessoaDto);
    return;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const pessoa = await this.pessoaService.findOne(id);

    if (!pessoa) {
      throw new HttpException(
        'Pessoa informada inválida!',
        HttpStatus.NOT_FOUND,
      );
    }
    await this.enderecoService.removeAll(pessoa);
    return await this.pessoaService.remove(id);
  }
}
