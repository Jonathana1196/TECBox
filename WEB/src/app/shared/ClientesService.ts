import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ClientesService {
    constructor(private http: HttpClient) { }
    
    postClientes(formData) {
        return this.http.post(environment.apiBaseURL + 'Clientes', formData);
    }
    putClientes(formData) {
        return this.http.put(environment.apiBaseURL + 'Clientes' + formData.Cedula, formData);
    }

    deleteClientes(formData) {
        return this.http.delete(environment.apiBaseURL + 'Clientes', formData);
    }
    getClientes() {
        return this.http.get('http://127.0.0.1:5001/' + 'clientes');

    }
}