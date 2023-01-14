import { IsDate, IsEnum, IsNotEmpty, IsString, Validate, MinLength, ValidateNested } from "class-validator";
import { Endereco } from "../entities/endereco.entity";
import { tipo_pessoa } from "../enums/pessoa.enum";
import { DataNascimentoValidator } from "../validators/data-nascimento.validator";
import { identificacaoValidator } from "../validators/identificacao.validator";
import { Utils } from "src/app.utils";
import { Transform, Type } from "class-transformer";
import { EnderecoValidator } from "../validators/endereco-validator.validator";
import { CreateEnderecoDto } from "./create-endereco.dto";

export class CreatePessoaDto {

    @IsNotEmpty({message: Utils.mensagemObrigatorio('Nome')})
    @IsString()    
    nome: string;
    
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Identificação')})
    @IsString()
    @Transform(({ value }) => Utils.apenasNumeros(value))
    @Validate(identificacaoValidator)    
    identificacao: string;
    
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Tipo Pessoa')})
    @IsEnum(tipo_pessoa)
    tipo: tipo_pessoa;
    
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Data de nascimento')})
    @Transform(({value}) => new Date(value))
    @IsDate()
    @Validate(DataNascimentoValidator)
    data_nascimento: Date;
    
    @IsNotEmpty({message: 'Obrigatório informar endereço'})
    @Type(() => CreateEnderecoDto)
    @ValidateNested({each: true})
    @Validate(EnderecoValidator)
    enderecos: CreateEnderecoDto[];    
}
