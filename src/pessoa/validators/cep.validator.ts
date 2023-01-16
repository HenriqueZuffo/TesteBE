import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Utils } from "src/app.utils";

@ValidatorConstraint({name: 'CepValidator', async: false})
export class CepValidator implements ValidatorConstraintInterface{
    
    validate(value: string): boolean {
        if(!value) return false
        return Utils.apenasNumeros(value).length == 9 ? true : false
    }

    defaultMessage(): string {
        return 'Cep inválido'
    }

}