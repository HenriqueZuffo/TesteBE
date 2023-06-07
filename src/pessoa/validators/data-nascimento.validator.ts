import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'DataNascimentoValidator', async: false })
export class DataNascimentoValidator implements ValidatorConstraintInterface {
  validate(value: Date): boolean {
    if (!value) return false;
    return value < new Date();
  }

  defaultMessage(): string {
    return 'Data de nascimento deve ser menor que a data atual!';
  }
}
