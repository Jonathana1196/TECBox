import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';
import {timeout} from 'rxjs/operators';
import {TrabajadorService} from '../../shared/TrabajadorService';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {
  TrabajadorFroms: FormArray = this.fb.array([]);
  RolesList = [];
  SucurList = [];
  notification = null;

  constructor(private fb: FormBuilder,
              // tslint:disable-next-line:no-shadowed-variable
              private TrabajadorService: TrabajadorService) { }

  ngOnInit(): void {
    this.TrabajadorService.getRolesList().subscribe(res => this.RolesList = res as []);
    this.TrabajadorService.getSucursalList().subscribe(res => this.SucurList = res as []);
    this.TrabajadorService.getTrabajadores().subscribe(
      res => {
        if (res === []) {
          this.addTrabajador();
        }
        else{
          (res as []).forEach((Trabajador: any) => {
            this.TrabajadorFroms.push(this.fb.group({
              dataID : [1],
              Cedula : [Trabajador.cedula, Validators.required],
              Nombre : [Trabajador.nombre],
              Rol : [Trabajador.rol],
              Sucursal : [Trabajador.sucursal],
              Apellidos: [Trabajador.apellidos],
              FechaN : [Trabajador.fechaN],
              FechaI : [Trabajador.fechaI],
              SalarioH : [Trabajador.salarioH],
              SalarioM : [Number(Trabajador.salarioH) * 160]

            }));
          });
        }
      }
    );
  }
  addTrabajador(){
    this.TrabajadorFroms.push(this.fb.group({
      dataID : [0],
      Cedula : ['', Validators.required],
      Nombre : [''],
      Rol : [''],
      Sucursal : [''],
      Apellidos: [''],
      FechaN : [''],
      FechaI : [''],
      SalarioH : [''],
      SalarioM : ['']

    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.TrabajadorService.postTrabajador(fg.value).subscribe(
        (res: any) => {
          fg.patchValue({Cedula: res.Cedula});
        }
      );
    }
    else{
      this.TrabajadorService.putTrabajador(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(Cedula, i){
    this.TrabajadorService.deleteTrabajador(Cedula).subscribe(
      res => {
        this.TrabajadorFroms.removeAt(i);
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
