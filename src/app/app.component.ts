
/*modulo component proveniente de angular core descargado desde npm, 
al haber realizado la instalacion*/
import { Component } from '@angular/core';

/*Component : provee un decorador
  Decorador : soportan metadatos y dan funcionalidad 'extra' a la clase 
  Metadato  : propiedades que aportan carateristicas a las clases y describen
              relaciones entre ellas. Ej, si hay un componente y una plantilla
              el metadato se encargara de decirle a Angular que ellos van juntos.
              EJ2: el selector en el @Component es un metadato.
  templateUrl : permite asignar una vista o una plantilla a fichero html, donde
                se podra mostrar o imprimir la informacion guardada en la clase 
                del componente.
  styleUrls : permite asociar un estilo al componente. Un estilo a solo un componente.
  SE DEBEN DECLARAR TODOS LOS COMPONENTES EN APP.MODULE.TS
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*La clase declarada abajo, se indica que es un componente 
  y la etiqueta donde se cargara el componente es app-root
*/
export class AppComponent {
  title = 'curso-angular8 ';
}
