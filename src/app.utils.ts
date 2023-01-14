export abstract class Utils{
    
    public static apenasNumeros(str: string): string{      
        return str.replace("/\D/g","");  
    }

    public static mensagemObrigatorio(campo: string): string{
        return `${campo} é obrigatório`
    }

}