import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SucursalesComponent} from './sucursales/sucursales.component';
import {RolesComponent} from './roles/roles.component';

const routes: Routes = [
  { path: 'SucursalesView', pathMatch: 'prefix', component: SucursalesComponent},
  { path: 'RolesView', pathMatch: 'prefix', component: RolesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
