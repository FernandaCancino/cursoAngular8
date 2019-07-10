import { Component } from "@angular/core";
import { RopaServices} from "../services/ropa.services";


@Component({
    selector: 'home'
    ,templateUrl: './home.component.html'
    //nombre del servicio
    ,providers: [RopaServices]
})

export class HomeComponent{
    public titulo = "Pagina Principal de Home";

    //se crea propiedad para instanciar al objeto del servicio para poder utilizar el objeto y sus metodos
    constructor(
        //nombre del servicio
        private _ropaService: RopaServices
    ){}


    ngOnInit(){
        //nombre del metodo (prueba) que esta dentro de ropa.services.ts - dentro de la clase
        //cuando no recibe parametros 
        //console.log(this._ropaService.prueba());

        //cuando si recibe parametros
        console.log(this._ropaService.prueba('Camiseta Nike'));
    }

}



