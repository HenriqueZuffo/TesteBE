import { Controller, Get, Post, Body, Put, Param, Delete, HttpStatus, HttpException, HttpCode } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Response } from 'express';
import { EnderecoService } from './endereco.service';

@Controller('pessoa')
export class PessoaController {
  constructor(
    private readonly pessoaService: PessoaService,
    private readonly enderecoService: EnderecoService
    ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createPessoaDto: CreatePessoaDto, res: Response) {
    const id = await this.pessoaService.create(createPessoaDto)
    createPessoaDto.enderecos.map(async (end) => await this.enderecoService.create(id, end))
    return id 
  }

  @Get()
  async findAll() {
    const pessoas = await this.pessoaService.findAll();

    if(!pessoas){
      throw new HttpException('Nenhuma pessoa foi encontrada!', HttpStatus.NOT_FOUND)
    }

    pessoas.map(async(pessoa) => 
      pessoa.enderecos = await this.enderecoService.findAll(pessoa.id)
    )

    return pessoas
  }

  @Get(':id')
  async findOne(@Param('id') id: number, res: Response) {
    const pessoa = await this.pessoaService.findOne(id)
    
    if(!pessoa){
      throw new HttpException('Pessoa não encontrada!', HttpStatus.NOT_FOUND)      
    }

    pessoa.enderecos = await this.enderecoService.findAll(pessoa.id)
    return pessoa
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatePessoaDto: UpdatePessoaDto) {
    const pessoa = await this.pessoaService.findOne(id);
    
    if(!pessoa){
      throw new HttpException('Pessoa informada inválida!', HttpStatus.NOT_FOUND)
    }

    return await this.pessoaService.update(id, updatePessoaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const pessoa = await this.pessoaService.findOne(id);
    
    if(!pessoa){
      throw new HttpException('Pessoa informada inválida!', HttpStatus.NOT_FOUND)
    }
    
    pessoa.enderecos.map(async (end) => await this.enderecoService.remove(id, end.id))

    return await this.pessoaService.remove(id);    
  }
}
