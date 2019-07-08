import { Component } from '@angular/core';
import {Empleado} from './Empleado';


@Component ({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
    public tittle_empleado = 'Componente empleado';
    public empleado : Empleado;
    public trabajadores :Array <Empleado>;

    constructor(){

        this.empleado = new Empleado('Boris', 23, 'cocinero', true);
        this.trabajadores = [
            new Empleado('Boris', 23, 'cocinero', true),
            new Empleado('Boris2', 24, 'cocinero2', false),
            new Empleado('Boris3', 25, 'cocinero3', true)
        ];

    }

    ngOnInit(){

        console.log(this.empleado);
        console.log(this.trabajadores);
    }
}