import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';
import {timeout} from 'rxjs/operators';
import {ClienteService} from '../../shared/ClientesService';
import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  ClienteFroms: FormArray = this.fb.array([]);
  UbiList = [];
  notification = null;
  constructor(private fb: FormBuilder,
              // tslint:disable-next-line:no-shadowed-variable
              private ClienteService: ClienteService) { }

  ngOnInit(): void {
    this.ClienteService.getUbicacionList().subscribe(res => this.UbiList = res as []);
    this.ClienteService.getClientes().subscribe(
      res => {
        if (res === []) {
          this.addCliente();
        }
        else{
          (res as []).forEach((Cliente: any) => {
            this.ClienteFroms.push(this.fb.group({
              dataID : [1],
              Cedula : [Cliente.cedula, Validators.required],
              Nombre : [Cliente.nombre],
              Apellidos: [Cliente.apellido],
              Correo : [Cliente.correo],
              Casillero: [Cliente.casillero],
              TelefonoCasa : [Cliente.telefonoCasa],
              TelefonoCelular : [Cliente.telefonoCelular],
              Usuario : [Cliente.usuario],
              Password : [Cliente.password],
              Direccion: [Cliente.ubicacion],

            }));
          });
        }
      }
    );
  }
  addCliente(){
    this.ClienteFroms.push(this.fb.group({
      dataID : [0],
      Cedula : ['', Validators.required],
      Nombre : [''],
      Apellidos: [''],
      Correo : [''],
      Casillero: [''],
      TelefonoCasa : [''],
      TelefonoCelular : [''],
      Usuario : [''],
      Password : [''],
      Direccion: [''],

    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.ClienteService.postCliente(fg.value).subscribe(
        (res: any) => {
          fg.patchValue({Cedula: res.Cedula});
        }
      );
    }
    else{
      this.ClienteService.putCliente(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(Cedula, i){
    this.ClienteService.deleteCliente(Cedula).subscribe(
      res => {
        this.ClienteFroms.removeAt(i);
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
