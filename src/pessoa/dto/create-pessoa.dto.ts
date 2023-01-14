import { IsDate, IsEnum, IsIn, IsNotEmpty, IsString, Validate } from "class-validator";
import { Endereco } from "../entities/endereco.entity";
import { tipo_pessoa } from "../enums/pessoa.enum";
import { DataNascimentoValidator } from "../validators/data-nascimento.validator";
import { identificacaoValidator } from "../validators/identificacao.validator";
import { Utils } from "src/app.utils";
import { CreateEnderecoDto } from "./create-endereco.dto";
import { Transform } from "class-transformer";

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
    @IsDate()
    @Validate(DataNascimentoValidator)
    data_nascimento: Date;
    
    @IsNotEmpty({message: 'Obrigatório informar ao menos 1 endereço'})
    @IsIn([CreateEnderecoDto], { each: true})
    enderecos: Endereco[];    
}
