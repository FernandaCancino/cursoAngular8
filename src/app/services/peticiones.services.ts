import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
//libreria para mapear respuesta http
import { map } from 'rxjs/operators'; //import 'rxjs/add/operator/map';

/*importamos el objeto o modulo observable que nos permitira utilizar 'rxjs' 
 para la respuesta mapearla y trabajar con ella  */
 import { Observable } from 'rxjs/Observable';

/*CON LAS IMPORTACIONES DE ARRIBA YA ES SUFICIENTE PARA TRABAJAR CON LAS PETICIONES AJAX */


@Injectable()

export class PeticionesServices{

    public url:string;

    constructor( private _http:Http){
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }


    getPrueba(){
        return 'Hola mundo desde el servicio';
    }

    //con este metodo realizaremos una peticion por get a la url indicada en el constructor
    getArticulos(){

        //peticion ajax por get
        return this._http.get(this.url)
        // como recoger el resultado de la peticion http
                         .map(res => res.json());
        
        //se convierte el json a objeto usable para js

    }

}

