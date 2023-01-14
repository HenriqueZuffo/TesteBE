import { IsEnum, IsNumber, IsString, IsNotEmpty, Length, IsOptional } from "class-validator";
import { Utils } from "src/app.utils";
import { Transform } from "class-transformer";
import { tipo_endereco } from "../enums/endereco.enum";

export class UpdateEnderecoDto{
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Id do endereço')})
    @IsNumber()
    id: number;

    @IsNotEmpty({message: Utils.mensagemObrigatorio('Id da pessoa')})
    @IsNumber()
    pessoa: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }) => Utils.apenasNumeros(value))
    @Length(9, 9, {message: 'Cep inválido'})
    cep?: string;
    
    @IsOptional()
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Logradouro')})
    @IsString()
    logradouro?: string;

    @IsOptional()
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Número')})
    @IsNumber()
    numero?: number;

    @IsOptional()
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Bairro')})
    @IsString()
    bairro?: string;
    
    @IsOptional()
    @IsString()
    complemento?: string;

    @IsOptional()
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Cidade')})
    @IsString()
    cidade?: string;

    @IsOptional()
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Uf')})
    @IsString()
    @Length(2, 2, {message: 'Uf deve conter 2 caracteres'})
    uf?: string;

    @IsOptional()
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Tipo de Endereço')})
    @IsEnum(tipo_endereco)
    tipo?: tipo_endereco;   
}