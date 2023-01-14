import { Module } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { PostgresPessoaRepository } from './repositories/Implementation/postgres-pessoa.repository';
import { PessoaRepository } from './repositories/pessoa.repository';
import { EnderecoRepository } from './repositories/endereco.repository';
import { PostgresEnderecoRepository } from './repositories/Implementation/postgres-endereco.repository';
import { EnderecoService } from './endereco.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endereco } from './entities/endereco.entity';
import { Pessoa } from './entities/pessoa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Endereco, Pessoa])],
  controllers: [PessoaController],
  providers: [PessoaService, 
    {
      provide: PessoaRepository,
      useClass: PostgresPessoaRepository
    },

    {
      provide: EnderecoRepository,
      useClass: PostgresEnderecoRepository
    },
    EnderecoService
  ]
})
export class PessoaModule {}
