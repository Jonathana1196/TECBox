import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TecboxaComponent } from './Administrador/tecboxa/tecboxa.component';
import { TecboxcComponent } from './Cliente/tecboxc/tecboxc.component';
import { SucursalesComponent } from './Administrador/sucursales/sucursales.component';
import { RolesComponent } from './Administrador/roles/roles.component';
import { TrabajadoresComponent } from './Administrador/trabajadores/trabajadores.component';
import { VendedoresComponent } from './Administrador/vendedores/vendedores.component';
import { ProductosComponent } from './Administrador/productos/productos.component';
import { RutasComponent } from './Administrador/rutas/rutas.component';
import { ClientesComponent } from './Cliente/clientes/clientes.component';
import { CompraproductosComponent } from './Cliente/compraproductos/compraproductos.component';
import { RastreopComponent } from './Cliente/rastreop/rastreop.component';
import { PaquetesComponent } from './Bodeguero/paquetes/paquetes.component';
import { TecboxbComponent } from './Bodeguero/tecboxb/tecboxb.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/Home', pathMatch: 'full'
  },

  { path: 'Home', component: HomeComponent },

  { path: 'Register', component: RegisterComponent},

  { path: 'Login', component: LoginComponent},

  {
    path: 'TECBoxHA', pathMatch: 'prefix',
    children: [
      { path: 'SucursalesView', pathMatch: 'prefix', component: SucursalesComponent },
      { path: 'RolesView', pathMatch: 'prefix', component: RolesComponent },
      { path: 'VendedorView', pathMatch: 'prefix', component: VendedoresComponent },
      { path: 'TrabajadorView', pathMatch: 'prefix', component: TrabajadoresComponent },
      { path: 'ProductosView', pathMatch: 'prefix', component: ProductosComponent },
      { path: 'RutasView', pathMatch: 'prefix', component: RutasComponent },
      { path: '', component: TecboxaComponent }
    ]
  },
  {
    path: 'TECBoxHC', pathMatch: 'prefix',
    children: [
      { path: 'ClientesView', pathMatch: 'prefix', component: ClientesComponent },
      { path: 'CompraView', pathMatch: 'prefix', component: CompraproductosComponent },
      { path: 'RastreoView', pathMatch: 'prefix', component: RastreopComponent },
      { path: '', component: TecboxcComponent }
    ]
  },
  {
    path: 'TECBoxHB', pathMatch: 'prefix',
    children: [
      { path: 'PaquetesView', pathMatch: 'prefix', component: PaquetesComponent },
      { path: '', component: TecboxbComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
