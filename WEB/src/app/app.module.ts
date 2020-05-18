import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RolesComponent } from './Administrador/roles/roles.component';
import { SucursalesComponent } from './Administrador/sucursales/sucursales.component';
import { TrabajadoresComponent } from './Administrador/trabajadores/trabajadores.component';
import { VendedoresComponent } from './Administrador/vendedores/vendedores.component';
import { ProductosComponent } from './Administrador/productos/productos.component';
import { RutasComponent } from './Administrador/rutas/rutas.component';
import { NavbaraComponent } from './Administrador/navbara/navbara.component';
import { TecboxaComponent } from './Administrador/tecboxa/tecboxa.component';
import { TecboxcComponent } from './Cliente/tecboxc/tecboxc.component';
import { NavbarcComponent } from './Cliente/navbarc/navbarc.component';

@NgModule({
  declarations: [
    AppComponent,
    BankAccountComponent,
    RolesComponent,
    SucursalesComponent,
    TrabajadoresComponent,
    VendedoresComponent,
    ProductosComponent,
    RutasComponent,
    NavbaraComponent,
    TecboxaComponent,
    TecboxcComponent,
    NavbarcComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
