import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RolesComponent } from './roles/roles.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { NavbaraComponent } from './navbara/navbara.component';
import { NavbarbComponent } from './navbarb/navbarb.component';
import { NavbarcComponent } from './navbarc/navbarc.component';
import { NavbarrComponent } from './navbarr/navbarr.component';
import { TecboxaComponent } from './tecboxa/tecboxa.component';
import { TecboxbComponent } from './tecboxb/tecboxb.component';
import { TecboxcComponent } from './tecboxc/tecboxc.component';
import { TecboxrComponent } from './tecboxr/tecboxr.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CompraproductosComponent } from './compraproductos/compraproductos.component';

@NgModule({
  declarations: [
    AppComponent,
    BankAccountComponent,
    RolesComponent,
    SucursalesComponent,
    TrabajadoresComponent,
    VendedoresComponent,
    NavbaraComponent,
    NavbarbComponent,
    NavbarcComponent,
    NavbarrComponent,
    TecboxaComponent,
    TecboxbComponent,
    TecboxcComponent,
    TecboxrComponent,
    ClientesComponent,
    CompraproductosComponent
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
