import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SucursalesComponent} from './sucursales/sucursales.component';
import {RolesComponent} from './roles/roles.component';
import {TrabajadoresComponent} from './trabajadores/trabajadores.component';
import {VendedoresComponent} from './vendedores/vendedores.component';

const routes: Routes = [
  { path: 'SucursalesView', pathMatch: 'prefix', component: SucursalesComponent},
  { path: 'RolesView', pathMatch: 'prefix', component: RolesComponent},
  { path: 'VendedorView', pathMatch: 'prefix', component: VendedoresComponent},
  { path: 'TrabajadorView', pathMatch: 'prefix', component: TrabajadoresComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
