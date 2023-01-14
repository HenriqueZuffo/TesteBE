import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { tipo_pessoa } from "../enums/pessoa.enum";
import { Endereco } from "./endereco.entity";

@Entity()
export class Pessoa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 150, nullable: false})
    nome: string;
    
    @Column({length: 14, nullable: false})
    identificacao: string;
    
    @Column({nullable: false})
    tipo: tipo_pessoa;
    
    @Column({nullable: false})
    data_nascimento: Date;
    
    enderecos: Endereco[];
}
