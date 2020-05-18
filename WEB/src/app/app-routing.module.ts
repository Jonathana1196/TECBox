import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SucursalesComponent} from './Administrador/sucursales/sucursales.component';
import {RolesComponent} from './Administrador/roles/roles.component';
import {TrabajadoresComponent} from './Administrador/trabajadores/trabajadores.component';
import {VendedoresComponent} from './Administrador/vendedores/vendedores.component';
import {ProductosComponent} from './Administrador/productos/productos.component';
import {RutasComponent} from './Administrador/rutas/rutas.component';

const routes: Routes = [
  { path: 'SucursalesView', pathMatch: 'prefix', component: SucursalesComponent},
  { path: 'RolesView', pathMatch: 'prefix', component: RolesComponent},
  { path: 'VendedorView', pathMatch: 'prefix', component: VendedoresComponent},
  { path: 'TrabajadorView', pathMatch: 'prefix', component: TrabajadoresComponent},
  { path: 'ProductoView', pathMatch: 'prefix', component: ProductosComponent},
  { path: 'RutasView', pathMatch: 'prefix', component: RutasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
