import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  getUbicacionList(){
    return this.http.get(environment.apiBaseURL + 'Ubicaciones');
  }

  postCliente(formData) {
    return this.http.post(environment.apiBaseURL + 'Clientes', formData);
  }

  putCliente(formData) {
    return this.http.put(environment.apiBaseURL + 'Clientes/' + formData.Cedula, formData);
  }
  deleteCliente(id) {
    return this.http.delete(environment.apiBaseURL + 'Clientes/' + id);
  }

  getClientes(){
    return this.http.get('http://127.0.0.1:5001/' + 'Clientes');
  }


}
