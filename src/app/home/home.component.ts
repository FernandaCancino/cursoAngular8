import { Component } from "@angular/core";
import { RopaServices} from "../services/ropa.services";


@Component({
    selector: 'home'
    ,templateUrl: './home.component.html'
    //nombre del servicio
    ,providers: [RopaServices]
})

export class HomeComponent{

    //propiedades
    public titulo = "Pagina Principal de Home";
    public listado_ropa:Array<string>;
    public prenda_a_guardar:string;

    public fecha;


    //se crea propiedad para instanciar al objeto del servicio para poder utilizar el objeto y sus metodos
    constructor(
        //nombre del servicio
        private _ropaService: RopaServices
    ){
        this.fecha = new Date (2017, 4, 15);
    }


    ngOnInit(){
        //nombre del metodo (prueba) que esta dentro de ropa.services.ts - dentro de la clase
        //cuando no recibe parametros 
        //console.log(this._ropaService.prueba());

        //cuando si recibe parametros
        console.log(this._ropaService.prueba('Camiseta Nike'));

        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);
    }


    guardarPrenda(){
        this._ropaService.addRopa(this.prenda_a_guardar);
        //para que al guardar la prenda el valor en la caja de texto quede vacia
        this.prenda_a_guardar = null;
    }

    eliminarPrenda(index:number){
        this._ropaService.deleteRopa(index);
        //alert(index);
    }


}



