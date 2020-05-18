import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  constructor(private http: HttpClient) { }
  getUbicacionList(){
    return this.http.get(environment.apiBaseURL + 'Ubicaciones');
  }
  getEncargadosList(){
    return this.http.get(environment.apiBaseURL + 'Trabajadores');
  }

  postSucursal(formData) {
    return this.http.post(environment.apiBaseURL + 'Sucursales', formData);
  }

  putSucursales(formData) {
    return this.http.put(environment.apiBaseURL + 'Sucursales/' + formData.Id, formData);
  }
  deleteSucursales(id) {
    return this.http.delete(environment.apiBaseURL + 'Sucursales/' + id);
  }

  getSucursales(){
    return this.http.get('http://127.0.0.1:5001/' + 'Sucursales');
  }


}
