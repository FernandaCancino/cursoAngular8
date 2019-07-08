import { Component } from '@angular/core';

//definicon del componente
@Component({
    selector: 'fruta',
    //plantilla en linea
    templateUrl : './fruta.component.html'
})

//con export se permite que esta clase sea utilizada en otro fichero
export class FrutaComponent{
    public nombre_componente = 'Componente de Fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia ';

    public nombre:string = 'Fernanda';
    public nombre2:string;
    public edad:number;
    public mayorDeEdad:boolean = true;
    public trabajos:Array<string> = ['carpintero', 'fontanero'];
    //any = tipo de dato vacio 
    public trabajosAny:Array<any> = ['carpintero: ', 22, ' fontanero: ', 23];

    comodin:any = 'Cualquiar Cosa';

    constructor(){

        console.log(this.trabajosAny);
        console.log(this.comodin);

        this.nombre2 = 'Fernanda 2 '
        this.edad = 23;

       

    }

    ngOnInit (){
        this.cambiarNombre();
        this.cambiarEdad(100);
        alert( this.nombre + this.edad);
        console.log( this.nombre + this.edad);
    }

    holaMundo(){
        'Hola Mundo!';
    }

    cambiarNombre( ){
       this.nombre = ' Fernanda tres ';
    }

    cambiarEdad (edad){
        this.edad = edad;
    }

}