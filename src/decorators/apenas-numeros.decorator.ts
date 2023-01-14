import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Utils } from "src/app.utils";

export function ApenasNumeros():PropertyDecorator{
    return function(target: any, propertyKey: string){
        let apenasNumeros: string;
        
        const getter = function(){
            return apenasNumeros;
        }

        const setter = function(){
            apenasNumeros = Utils.apenasNumeros(apenasNumeros)
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    }
}