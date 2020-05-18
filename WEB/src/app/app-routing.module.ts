import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { TecboxaComponent } from './tecboxa/tecboxa.component';
import { TecboxcComponent } from './tecboxc/tecboxc.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { RolesComponent } from './roles/roles.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CompraproductosComponent } from './compraproductos/compraproductos.component';

const routes: Routes = [
  {
    path: 'TECBoxHA', pathMatch: 'prefix',
    children: [
      { path: 'SucursalesView', pathMatch: 'prefix', component: SucursalesComponent },
      { path: 'RolesView', pathMatch: 'prefix', component: RolesComponent },
      { path: 'VendedorView', pathMatch: 'prefix', component: VendedoresComponent },
      { path: 'TrabajadorView', pathMatch: 'prefix', component: TrabajadoresComponent },
      { path: '', component: TecboxaComponent }
    ]
  },
  {
    path: 'TECBoxHC', pathMatch: 'prefix',
    children: [
      { path: 'ClientesView', pathMatch: 'prefix', component: ClientesComponent },
      { path: 'CompraView', pathMatch: 'prefix', component: CompraproductosComponent },
      //{ path: 'VendedorView', pathMatch: 'prefix', component: VendedoresComponent },
      { path: '', component: TecboxcComponent }
    ]
  }
=======
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
>>>>>>> 74e7d3d75e51c3c3f341bdded590b0a5b4f50d7a
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
