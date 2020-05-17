import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BankService} from '../shared/bank.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {
  bankAccountForms: FormArray = this.fb.array([]);
  bankList = [];

  constructor(private fb: FormBuilder,
              private bankService: BankService) { }

  ngOnInit(): void {
    this.bankService.getBankList().subscribe(res => this.bankList = res as []);
    this.bankService.getTrabajadores().subscribe(
      res => {
        if (res === []) {
          this.addBankAccount();
        }
        else{
          (res as []).forEach((bankAccount: any) =>{
            this.bankAccountForms.push(this.fb.group({
              Cedula : [bankAccount.cedula, Validators.required],
              Nombre : [bankAccount.nombre],
              Rol : [bankAccount.rol],
              Sucursal : [bankAccount.sucursal],
              Apellidos: [bankAccount.apellidos],
              FechaN : [bankAccount.fechaN],
              FechaI : [bankAccount.fechaI],
              SalarioH : [bankAccount.salarioH]

            }));
            });
        }
      }
    );
  }
  addBankAccount(){
    this.bankAccountForms.push(this.fb.group({
      Cedula : ['', Validators.required],
      Nombre : [''],
      Rol : [''],
      Sucursal : [''],
      Apellidos: [''],
      FechaN : [''],
      FechaI : [''],
      SalarioH : ['']

    }));
  }
  recordSubmit(fg: FormGroup){
    this.bankService.postBankAccount(fg.value).subscribe(
      (res: any) => {
        fg.patchValue({bankAccountID: res.BankAccountID});
      }
    );
  }
}
