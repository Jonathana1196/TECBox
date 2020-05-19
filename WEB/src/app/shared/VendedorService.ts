import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private http: HttpClient) { }
  postVendedor(formData) {
    return this.http.post(environment.apiBaseURL + 'Vendedores', formData);
  }

  putVendedor(formData) {
    return this.http.put(environment.apiBaseURL + 'Vendedores/' + formData.Cedula, formData);
  }
  deleteVendedor(id) {
    return this.http.delete(environment.apiBaseURL + 'Vendedores/' + id);
  }

  getVendedores() {
    return this.http.get('http://127.0.0.1:5001/' + 'vendedores');
  }

}