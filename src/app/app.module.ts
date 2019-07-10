import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http'; 
import { routing, appRoutingProviders } from "./app.routing";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent} from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
     AppComponent
    ,FrutaComponent
    ,EmpleadoComponent
    ,HomeComponent
    ,ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    routing
  ],
  //en el array se agrega el servicio que hace que el router se lanze y funcione cada vez que lo llamemos
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

