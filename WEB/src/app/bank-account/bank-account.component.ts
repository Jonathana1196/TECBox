import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BankService} from '../shared/bank.service';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {
  bankAccountForms: FormArray = this.fb.array([]);
  bankList = [];
  notification = null;

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
          (res as []).forEach((bankAccount: any) => {
            this.bankAccountForms.push(this.fb.group({
              dataID : [1],
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
      dataID : [0],
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
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.bankService.postBankAccount(fg.value).subscribe(
        (res: any) => {
          fg.patchValue({Cedula: res.Cedula});
        }
      );
    }
    else{
      this.bankService.putBankAccount(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(Cedula, i){
    this.bankService.deleteBankAccount(Cedula).subscribe(
      res => {
        this.bankAccountForms.removeAt(i);
        this.showNotification('delete');
      }
    );
  }

  showNotification(category){
    switch (category) {
      case 'insert':
        this.notification = {class: 'text-success', message: 'Saved'};
        break;
      case 'update':
        this.notification = {class: 'text-primary', message: 'Updated'};
        break;
      case 'delete':
        this.notification = {class: 'text-danger', message: 'Deleted'};
        break;
      default:
        break;
    }
    setTimeout(() => {
      this.notification = null;
    }, 3000);
  }
}
