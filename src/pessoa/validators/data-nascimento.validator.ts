import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({name: 'DataNascimentoValidator', async: false})
export class DataNascimentoValidator implements ValidatorConstraintInterface{
    validate(value: Date): boolean {
        return value < new Date() ? true : false
    }
    
    defaultMessage(): string {
        return 'Data de nascimento deve ser menor que a data atual!'
    }

}