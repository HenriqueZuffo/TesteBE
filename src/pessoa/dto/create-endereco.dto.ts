import { IsEnum, IsNumber, IsString, IsNotEmpty, Length, IsOptional } from "class-validator";
import { tipo_endereco } from "../enums/endereco.enum";
import { Utils } from "src/app.utils";
import { Transform } from "class-transformer";


export class CreateEnderecoDto{
    
    @IsOptional()
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Id da Pessoa')})
    @IsNumber()
    pessoa: number;
    
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Cep')})
    @IsString()
    @Transform(({ value }) => Utils.apenasNumeros(value))
    @Length(9, 9, {message: 'Cep inválido'})
    cep: string; 
    
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Logradouro')})
    @IsString()
    logradouro: string;
    
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Número')})
    @IsNumber()
    numero: number;
    
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Bairro')})
    @IsString()
    bairro: string;
    
    @IsOptional()
    @IsString()
    complemento: string;
     
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Cidade')})
    @IsString()
    cidade: string;
    
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Uf')})
    @IsString()
    @Length(2, 2, {message: 'Uf deve conter 2 caracteres'})
    uf: string;
    
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Tipo de Endereço')})
    @IsEnum(tipo_endereco)
    tipo: tipo_endereco;   
}