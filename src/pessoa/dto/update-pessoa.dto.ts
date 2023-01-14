import { IsDate, IsEnum, IsIn, IsNotEmpty, IsString, Validate, IsNumber, IsOptional } from "class-validator";
import { Utils } from "src/app.utils";
import { Endereco } from '../entities/endereco.entity';
import { tipo_pessoa } from '../enums/pessoa.enum';
import { DataNascimentoValidator } from "../validators/data-nascimento.validator";
import { identificacaoValidator } from "../validators/identificacao.validator";
import { Transform } from "class-transformer";

export class UpdatePessoaDto{
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsOptional()
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Nome')})
    @IsString()    
    nome: string;
    
    @IsOptional()
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Identificação')})
    @IsString()
    @Transform(({ value }) => Utils.apenasNumeros(value))
    @Validate(identificacaoValidator)
    identificacao: string;
    
    @IsOptional()
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Tipo Pessoa')})
    @IsEnum(tipo_pessoa)
    tipo: tipo_pessoa;
    
    @IsOptional()
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Data de nascimento')})
    @IsDate()
    @Validate(DataNascimentoValidator)
    data_nascimento: Date;

    @IsOptional()
    @IsNotEmpty({message: 'Obrigatório informar ao menos 1 endereço'})
    @IsIn([Endereco], { each: true})
    enderecos: Endereco[]; 
}