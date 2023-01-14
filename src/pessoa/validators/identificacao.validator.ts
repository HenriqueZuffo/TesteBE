import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Utils } from "src/app.utils";

@ValidatorConstraint({name: 'IdenficacaoValidator', async: false})
export class identificacaoValidator implements ValidatorConstraintInterface{
    validate(value: string): boolean {
        let lengthCpfCnpj = Utils.apenasNumeros(value).length
        return lengthCpfCnpj == 11 || lengthCpfCnpj == 14 ? true : false 
    }
    defaultMessage(): string {
        return 'Identificação inválida!'
    }

}