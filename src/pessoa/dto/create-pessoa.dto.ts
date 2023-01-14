import { IsDate, IsEnum, IsIn, IsNotEmpty, IsString, Validate } from "class-validator";
import { Endereco } from "../entities/endereco.entity";
import { tipo_pessoa } from "../enums/pessoa.enum";
import { DataNascimentoValidator } from "../validators/data-nascimento.validator";
import { identificacaoValidator } from "../validators/identificacao.validator";
import { ApenasNumeros } from "src/decorators/apenas-numeros.decorator";
import { Utils } from "src/app.utils";

export class CreatePessoaDto {

    @IsNotEmpty({message: Utils.mensagemObrigatorio('Nome')})
    @IsString({message: 'Nome tem que ser texto'})    
    nome: string;
    
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Identificação')})
    @IsString({message: 'identificacao tem que ser texto'})
    @Validate(identificacaoValidator)
    @ApenasNumeros()
    identificacao: string;
    
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Tipo Pessoa')})
    @IsEnum(tipo_pessoa)
    tipo: tipo_pessoa;
    
    @IsNotEmpty({message: Utils.mensagemObrigatorio('Data de nascimento')})
    @IsDate()
    @Validate(DataNascimentoValidator)
    data_nascimento: Date;
    
    @IsNotEmpty({message: 'Obrigatório informar ao menos 1 endereço'})
    @IsIn([Endereco], { each: true})
    enderecos: Endereco[];    
}
