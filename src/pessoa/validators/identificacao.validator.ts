import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Utils } from 'src/app.utils';

@ValidatorConstraint({ name: 'IdenficacaoValidator', async: false })
export class identificacaoValidator implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    if (!value) return false;
    const lengthCpfCnpj = Utils.apenasNumeros(value).length;
    return lengthCpfCnpj == 11 || lengthCpfCnpj == 14;
  }
  defaultMessage(): string {
    return 'Identificação inválida!';
  }
}
