import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }
  getVendedorList(){
    return this.http.get(environment.apiBaseURL + 'Vendedores');
  }

  postProducto(formData) {
    return this.http.post(environment.apiBaseURL + 'Productos', formData);
  }

  putProducto(formData) {
    return this.http.put(environment.apiBaseURL + 'Productos/' + formData.Codigo, formData);
  }
  deleteProductos(id) {
    return this.http.delete(environment.apiBaseURL + 'Productos/' + id);
  }

  getProductos(){
    return this.http.get('http://127.0.0.1:5001/' + 'Productos');
  }
}
