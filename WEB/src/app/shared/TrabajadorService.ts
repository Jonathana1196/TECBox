import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  constructor(private http: HttpClient) { }
  getRolesList(){
    return this.http.get(environment.apiBaseURL + 'Roles');
  }
  getSucursalList(){
    return this.http.get(environment.apiBaseURL + 'Sucursales');
  }

  postTrabajador(formData) {
    return this.http.post(environment.apiBaseURL + 'Trabajadores', formData);
  }

  putTrabajador(formData) {
    return this.http.put(environment.apiBaseURL + 'Trabajadores/' + formData.Cedula, formData);
  }
  deleteTrabajador(id) {
    return this.http.delete(environment.apiBaseURL + 'Trabajadores/' + id);
  }

  getTrabajadores(){
    return this.http.get('http://127.0.0.1:5001/' + 'Trabajadores');
  }


}
