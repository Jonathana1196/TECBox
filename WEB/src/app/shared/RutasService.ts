import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  constructor(private http: HttpClient) { }
  postRuta(formData) {
    return this.http.post(environment.apiBaseURL + 'Rutas', formData);
  }

  putRuta(formData) {
    return this.http.put(environment.apiBaseURL + 'Rutas/' + formData.Orden, formData);
  }
  deleteRuta(id) {
    return this.http.delete(environment.apiBaseURL + 'Rutas/' + id);
  }

  getRutas(){
    return this.http.get('http://127.0.0.1:5001/' + 'Rutas');
  }


}
