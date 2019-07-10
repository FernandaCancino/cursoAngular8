//decorador injectable
import { Injectable } from "@angular/core";

@Injectable()

export class RopaServices{

    public nombre_prenda = 'Pantalones vaqueros';

    prueba(nombre_prenda){
        //return this.nombre_prenda;
        return nombre_prenda;
    } 

}

