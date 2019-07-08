export class Empleado{

    /*en angular se puede hacer asi, e inicializa automaticamente la propiedad
      y le asigna un valor que le llega por parametro, asi nos podemos ahorrar codigo
    */
   constructor(
       public nombre:string,
       public edad:number,
       public cargo:string,
       public contratado:boolean
       )
       {}

}