import { Component } from '@angular/core';
import {Empleado} from './Empleado';
//import { timingSafeEqual } from './crypto';


@Component ({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{

    public tittle_empleado = 'Componente empleado';
    public empleado : Empleado;
    public trabajadores :Array <Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;


    constructor(){

        this.empleado = new Empleado('Boris', 23, 'cocinero', true);

        this.trabajadores = [
            new Empleado('Boris', 23, 'cocinero array 0', true),
            new Empleado('Boris2', 24, 'cocinero2 array 1', false),
            new Empleado('Boris3', 25, 'cocinero3 array 2', true)
        ];

        this.trabajador_externo = false;
        this.color = 'blue';
        this.color_seleccionado = 'yellow';

    }

    ngOnInit(){

        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;

    }

    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }
}