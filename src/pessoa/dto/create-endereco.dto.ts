import { IsEnum, IsNumber, IsString } from "class-validator";
import { tipo_endereco } from "../enums/endereco.enum";

export class CreateEnderecoDto{
    @IsNumber()
    pessoa: number;
    
    @IsString()
    cep: string; 
    
    @IsString()
    logradouro: string;
    
    @IsNumber()
    numero: number;
    
    @IsString()
    bairro: string;
    
    @IsString()
    complemento: string;
    
    @IsString()
    cidade: string;
    
    @IsString()
    uf: string;
    
    @IsEnum(tipo_endereco)
    tipo: tipo_endereco;   
}