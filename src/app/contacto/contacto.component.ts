import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'contacto'
    ,templateUrl: './contacto.component.html'
})

export class ContactoComponent{
    public tituloContacto = 'Pagina de Contacto de la Web'
    public parametro;


    //para poder utilizar los objetos que recibire por parametro tengo que inyectarlo en mi clase a traves del constructor
    constructor(
        private _route: ActivatedRoute
        ,private _router: Router
    ){}

    //como recoger el parametro de la url?
    ngOnInit(){

        //con esto recorro todos los parametros
        //utilizando una funcion de callback, pasandole como parametro params de tipo Params
        //se debe utilizar una funcion de flecha, ya que con la funcion callback no funciona
        //FUNCION DE FLECHA 
        this._route.params.forEach(( params: Params) =>{
            this.parametro = params['page'];
            console.log(params);
        });

        /* FUNCION CALLBACK NORMAL
       this._route.params.forEach(function( params: Params){
            this.parametro = params['page'];
            console.log(params);
        });
        */

    }

    redirigir(){
        this._router.navigate(['/contacto', 'google.cl']);
    }

    redirigir2(){
        this._router.navigate(['/pagina-principa']);
    }

}

