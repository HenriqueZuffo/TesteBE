import { ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Endereco } from "../entities/endereco.entity";

@ValidatorConstraint({name: 'EnderecoValidator', async: false})
export class EnderecoValidator implements ValidatorConstraintInterface{
    validate(value: Endereco[]): boolean {
        return value.length > 0 ? true : false
    }
    
    defaultMessage(): string {
        return 'Obrigatório informar ao menos 1 endereço'
    }
 
}