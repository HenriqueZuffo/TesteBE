import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { tipo_endereco } from '../enums/endereco.enum';
import { Pessoa } from './pessoa.entity';

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.enderecos, { nullable: false })
  pessoa: Pessoa;

  @Column({ length: 9, nullable: false })
  cep: string;

  @Column({ nullable: false })
  logradouro: string;

  @Column({ nullable: false })
  numero: number;

  @Column({ nullable: false })
  bairro: string;

  @Column({ nullable: true })
  complemento: string;

  @Column({ nullable: false })
  cidade: string;

  @Column({ length: 2, nullable: false })
  uf: string;

  @Column({ nullable: false })
  tipo: tipo_endereco;
}
