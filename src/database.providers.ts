import { DataSource } from "typeorm";
import { CreatePessoaTable1673789756439 } from "./migrations/1673789756439-CreatePessoaTable";
import { CreateEnderecoTable1673790154814 } from "./migrations/1673790154814-CreateEnderecoTable";

export const databaseProviders = [
    {
      provide: 'DATA_SOURCE',
      useFactory: async () => {
        const dataSource = new DataSource({
          type: "postgres",
          host: process.env.TYPEORM_HOST,
          port: Number(process.env.TYPEORM_PORT),
          username: process.env.TYPEORM_USERNAME,
          password: process.env.TYPEORM_PASSWORD,
          database: process.env.TYPEORM_DATABASE,
          entities: [__dirname + '/../**/*.entity.js'],
          synchronize: false,
        }); 
  
        return dataSource.initialize();
      },
    },
];

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false,
  migrations: [
    CreatePessoaTable1673789756439,
    CreateEnderecoTable1673790154814,
  ],
});