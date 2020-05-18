import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';
import {timeout} from 'rxjs/operators';
import {SucursalesService} from '../../shared/SucursalesService';
@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {
  SucursalesForms: FormArray = this.fb.array([]);
  UbicacionList = [];
  EncargadoList = [];
  notification = null;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private fb: FormBuilder, private SucursalesService: SucursalesService) { }

  ngOnInit(): void {
    this.SucursalesService.getEncargadosList().subscribe(res => this.EncargadoList = res as []);
    this.SucursalesService.getUbicacionList().subscribe(res => this.UbicacionList = res as []);
    this.SucursalesService.getSucursales().subscribe(
      res => {
        if (res === []) {
          this.addSucursal();
        }
        else{
          (res as []).forEach((Sucursal: any) => {
            this.SucursalesForms.push(this.fb.group({
              dataID : [1],
              Id : [Sucursal.id, Validators.required],
              Nombre : [Sucursal.nombre],
              Telefono : [Sucursal.telefono],
              Ubicacion : [Sucursal.ubicacion],
              Encargado : [Sucursal.encargado]
            }));
          });
        }
      }
    );
  }
  addSucursal(){
    this.SucursalesForms.push(this.fb.group({
      dataID : [0],
      Id : ['', Validators.required],
      Nombre : [''],
      Telefono : [''],
      Ubicacion : [''],
      Encargado : ['']
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.SucursalesService.postSucursal(fg.value).subscribe(
        (res: any) => {
          fg.patchValue({Id: res.Id});
        }
      );
    }
    else{
      this.SucursalesService.putSucursales(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(Id, i){
    this.SucursalesService.deleteSucursales(Id).subscribe(
      res => {
        this.SucursalesForms.removeAt(i);
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
