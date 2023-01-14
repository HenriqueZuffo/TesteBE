import { IsDate, IsEnum, IsIn, IsNotEmpty, IsString, Validate } from "class-validator";
import { Endereco } from "../entities/endereco.entity";
import { tipo_pessoa } from "../enums/pessoa.enum";
import { DataNascimentoValidator } from "../validators/data-nascimento.validator";
import { identificacaoValidator } from "../validators/identificacao.validator";

export class CreatePessoaDto {
    @IsString({message: 'Nome tem que ser texto'})
    @IsNotEmpty({message: 'Nome é obrigatório'})
    nome: string;
    
    @IsString({message: 'identificacao tem que ser texto'})
    @IsNotEmpty({message: 'identificacao é obrigatório'})
    @Validate(identificacaoValidator)
    identificacao: string;
    
    @IsEnum(tipo_pessoa)
    @IsNotEmpty({message: 'Tipo da pessoa é obrigatório'})
    tipo: tipo_pessoa;
    
    @IsDate()
    @IsNotEmpty({message: 'data de nascimento é obrigatório'})
    @Validate(DataNascimentoValidator)
    data_nascimento: Date;
    
    @IsIn([Endereco], { each: true})
    @IsNotEmpty({message: 'Obrigatório informar ao menos 1 endereço'})
    enderecos: Endereco[];    
}
