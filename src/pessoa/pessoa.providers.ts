import { DataSource } from 'typeorm';
import { Pessoa } from './entities/pessoa.entity';
import { Endereco } from './entities/endereco.entity';

export const pessoaProviders = [
  {
    provide: 'PESSOA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Pessoa),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'ENDERECO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Endereco),
    inject: ['DATA_SOURCE'],
  },
];
