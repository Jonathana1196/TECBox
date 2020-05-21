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
import { NavbarcComponent } from './Cliente/navbarc/navbarc.component';
import { TecboxaComponent } from './Administrador/tecboxa/tecboxa.component';
import { TecboxcComponent } from './Cliente/tecboxc/tecboxc.component';
import { RastreopComponent } from './Cliente/rastreop/rastreop.component';
import { ClientesComponent } from './Cliente/clientes/clientes.component';
import { CompraproductosComponent } from './Cliente/compraproductos/compraproductos.component';
import { PaquetesComponent } from './Bodeguero/paquetes/paquetes.component';
import { RastreoComponent } from './Bodeguero/rastreo/rastreo.component';
import { NavbarComponent } from './Bodeguero/navbar/navbar.component';
import { TecboxbComponent } from './Bodeguero/tecboxb/tecboxb.component';
import { MovilviewComponent } from './Movil/movilview/movilview.component';
import{ DeviceDetectorModule } from 'ngx-device-detector';
import { NavbarhComponent } from './shared/navbarh/navbarh.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BankAccountComponent,
    NavbaraComponent,
    RolesComponent,
    SucursalesComponent,
    TrabajadoresComponent,
    VendedoresComponent,
    ProductosComponent,
    RutasComponent,
    TecboxaComponent,
    NavbarcComponent,
    TecboxcComponent,
    RastreopComponent,
    ClientesComponent,
    CompraproductosComponent,
    PaquetesComponent,
    RastreoComponent,
    NavbarComponent,
    TecboxbComponent,
    MovilviewComponent,
    NavbarhComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
