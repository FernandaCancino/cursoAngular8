import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

//IMPORTAMOS COMPONENTES
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent} //ruta inicial - cuando la ruta no tenga nada, cargara el componente de Empleado
    ,{path: 'empleado', component:EmpleadoComponent} // ruta de empleado
    ,{path: 'fruta', component:FrutaComponent} // ruta de fruta
    ,{path: 'pagina-principal', component: HomeComponent}
    ,{path: 'contacto', component:ContactoComponent}
    //en este route indicamos que en contacto podemos recibir un parametro y utilizarlo
    ,{path: 'contacto/:page', component:ContactoComponent}
    ,{path: '**', component: HomeComponent} //ruta por defecto, Cuando la ruta falle, cuando se produce un error se cargara el empleado component ERROR 404
]
/*
    para UTILIZAR la configuracion de ruta 
    1.-exportar variable appRoutingProvider que es un array ANY, y vacia de momento 
    procedimeinto que necesita angular para cargar el provider de la ruta y que todo funcion
    2.- exportar variable Routing que sea de tipo ModuleWithProviders y se utlizara el objeto RouterModule y 
    le diremos que array de rutas debe cargar (en este caso appRoutes)
 */
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

/*
    Con esto Angular, coge las rutas, las introduscas y/o las inyecte en la configuracion  
    de la ruta del framework y funcione todo.
    *luego de esto se cargan en el appModule*
*/

