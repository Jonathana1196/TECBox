import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaquetesService {
  constructor(private http: HttpClient) { }
  getClientList(){
    return this.http.get(environment.apiBaseURL + 'Clientes ');
  }
  postPaquete(formData) {
    return this.http.post(environment.apiBaseURL + 'Paquetes', formData);
  }

  putPaquete(formData) {
    return this.http.put(environment.apiBaseURL + 'Paquetes/' + formData.Tracking, formData);
  }
  deletePaquete(id) {
    return this.http.delete(environment.apiBaseURL + 'Paquetes/' + id);
  }

  getPaquetes(){
    return this.http.get('http://127.0.0.1:5001/' + 'Paquetes');
  }
}
