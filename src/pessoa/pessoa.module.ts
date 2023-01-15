import { Module } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { PostgresPessoaRepository } from './repositories/Implementation/postgres-pessoa.repository';
import { PessoaRepository } from './repositories/pessoa.repository';
import { EnderecoRepository } from './repositories/endereco.repository';
import { PostgresEnderecoRepository } from './repositories/Implementation/postgres-endereco.repository';
import { EnderecoService } from './endereco.service';
import { DatabaseModule } from 'src/database/database.module';
import { pessoaProviders } from './pessoa.providers';

@Module({
  imports: [DatabaseModule],
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
    EnderecoService, 
    ...pessoaProviders
  ]
})
export class PessoaModule {}
