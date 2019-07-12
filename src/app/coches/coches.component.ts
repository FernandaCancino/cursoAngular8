import { Component } from "@angular/core";
import { Coche } from "./coche";
import { PeticionesServices } from '../services/peticiones.services';


@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesServices]
})

export class CochesComponent{

    public coche: Coche;
    public coches: Array<Coche>;
    public articulos;


    constructor(

        private _peticionesServices:PeticionesServices

    ){
        this.coche = new Coche ("", "", "");
        this.coches = [
                         new Coche("Seat Panda", "120", "Blanco")
                        ,new Coche("Renault Clio", "110", "Azul")
        ];

    }

onSubmit(){

    this.coches.push(this.coche);
    //vaciar obj coche - el formulario
    this.coche = new  Coche("", "", "");

    //para ver los datos de coche
    console.log(this.coche);
    
}

ngOnInit(){
    console.log(this._peticionesServices.getPrueba());

    //para poder recoger el resultado o el error se utiliza '.subscribe()'
    this._peticionesServices.getArticulos().subscribe(
                    result => {
                        this.articulos = result;
                         console.log(result);

                        if(!this.articulos){
                            console.log("Error en el servidor");
                        }

                    }
                    ,
                    error => {
                        var errorMessage = <any>error;
                        console.log(errorMessage);
                    }
                );
    
}



}

