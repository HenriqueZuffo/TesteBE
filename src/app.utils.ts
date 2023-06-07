export abstract class Utils {
  public static apenasNumeros(str: string): string {
    if (!str) return;
    return str.replace('/D/g', '');
  }

  public static mensagemObrigatorio(campo: string): string {
    return `${campo} é obrigatório`;
  }
}
