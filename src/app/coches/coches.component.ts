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
    
}



}

