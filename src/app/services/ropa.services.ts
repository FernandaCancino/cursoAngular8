//decorador injectable
import { Injectable } from "@angular/core";

@Injectable()

export class RopaServices{

    public nombre_prenda = 'Pantalones vaqueros';
    public coleccion_ropa = ['Pantalones Blancos', 'Camiseta Roja'];

    prueba(nombre_prenda){
        //return this.nombre_prenda;
        return nombre_prenda;
    } 

    //metodo que añade elementos al array 'coleccion_ropa'
    addRopa(nombre_prenda:string):Array<string>{
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }

    /*Con la linea que esta abajo, estamos diciendo que, el metodo añadir ropa recibe un string, y lo obligamos 
      :Array<string> con esto, a que nos devuelva un Array
        addRopa(nombre_prenda:string):Array<string>{
    */


    //para probar el metodo que añade ropa
    getRopa():Array<string>{
        return this.coleccion_ropa;
    }

    deleteRopa(index:number){
        this.coleccion_ropa.splice(index,1);
        return this.getRopa();
    }


}

