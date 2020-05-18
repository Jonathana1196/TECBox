import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }
  postRol(formData) {
    return this.http.post(environment.apiBaseURL + 'Roles', formData);
  }

  putRol(formData) {
    return this.http.put(environment.apiBaseURL + 'Roles/' + formData.Id, formData);
  }
  deleteRol(id) {
    return this.http.delete(environment.apiBaseURL + 'Roles/' + id);
  }

  getRoles(){
    return this.http.get('http://127.0.0.1:5001/' + 'Roles');
  }


}
