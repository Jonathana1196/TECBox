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

@NgModule({
  declarations: [
    AppComponent,
    BankAccountComponent,
    RolesComponent,
    SucursalesComponent,
    TrabajadoresComponent,
    VendedoresComponent,
    ProductosComponent,
    RutasComponent
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
