import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isLineBreak } from 'codelyzer/angular/sourceMappingVisitor';
import { timeout } from 'rxjs/operators';
import { ClientesService } from '../../shared/ClientesService';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  constructor(private fb: FormBuilder, private ClientesService: ClientesService) { }

  ClientesFroms: FormArray = this.fb.array([]);
  notification = null;

  ngOnInit(): void {
    this.ClientesService.getClientes().subscribe(
      res => {
        if (res == []) {
          this.addClientes();
        }
        else {
          (res as []).forEach((Clientes: any) => {
            this.ClientesFroms.push(this.fb.group({
              dataID: [1],
              Cedula: [Clientes.Cedula, Validators.required],
              Nombre: [Clientes.Nombre],
              Apellido: [Clientes.Apellido],
            }));
          });
        }
      }
    );
  }

  addClientes() {
    this.ClientesFroms.push(this.fb.group({
      dataID: [0],
      Cedula: ['', Validators.required],
      Nombre: [''],
      Apellido: [' '],
    }));
  }

  recordSubmit(fg: FormGroup) {
    if (fg.value.dataID === 0) {
      this.showNotification('insert');
      this.ClientesService.postClientes(fg.value).subscribe(
        (res: any) => {
          fg.patchValue({ Cedula: res.Cedula });
        }
      );
    }
    else {
      this.ClientesService.putClientes(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );
    }
  }

  onDelete(Cedula, i) {
    this.ClientesService.deleteClientes(Cedula).subscribe(
      res => {
        this.ClientesFroms.removeAt(i);
        this.showNotification('delete');
      }
    );
  }

  showNotification(category) {
    switch (category) {
      case 'insert':
        this.notification = { class: 'text-succes', message: 'Saved' };
        break;
      case 'update':
        this.notification = { class: 'text-primary', message: 'Updated' };
        break;
      case 'delete':
        this.notification = { class: 'text-danger', message: 'Deleted' };
        break;
      default:
        break;
    }
    setTimeout(() => {
      this.notification = null;
    }, 3000);
  }
}