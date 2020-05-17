import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }
  getBankList(){
    return this.http.get(environment.apiBaseURL + 'Roles');
  }

  postBankAccount(formData) {
    return this.http.post(environment.apiBaseURL + 'Trabajadores', formData);
  }

  putBankAccount(formData) {
    return this.http.put(environment.apiBaseURL + 'Trabajadores/' + formData.Cedula, formData);
  }
  deleteBankAccount(id) {
    return this.http.delete(environment.apiBaseURL + 'Trabajadores/' + id);
  }

  getTrabajadores(){
    return this.http.get('http://127.0.0.1:5001/' + 'Trabajadores');
  }


}
