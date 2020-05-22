import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';
import {timeout} from 'rxjs/operators';
import {PaquetesService} from '../../shared/PaquetesService';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {
  PaqueteForms: FormArray = this.fb.array([]);
  clientList = [];
  notification = null;
  constructor(private fb: FormBuilder,
              // tslint:disable-next-line:no-shadowed-variable
              private PaquetesService: PaquetesService) { }

  ngOnInit(): void {
    this.PaquetesService.getClientList().subscribe(res => this.clientList = res as []);
    this.startds();
  }
  startds(){
    this.PaquetesService.getPaquetes().subscribe(
      res => {
        if (res === []) {
          this.addPaquete();
        }
        else{
          (res as []).forEach((paquete: any) => {
            this.PaqueteForms.push(this.fb.group({
              dataID : [1],
              Tracking : [paquete.tracking, Validators.required],
              Descripcion : [paquete.descripcion],
              Estado : [paquete.estado],
              Entrega : [paquete.fechaEntrega],
              Cliente: [paquete.cliente]
            }));
          });
        }
      }
    );
  }
  addPaquete(){
    this.PaqueteForms.push(this.fb.group({
      dataID : [0],
      Tracking : ['', Validators.required],
      Descripcion : [''],
      Estado : [''],
      Entrega : [''],
      Cliente: ['']
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.PaquetesService.postPaquete(fg.value).subscribe(
        (res: any) => {
          fg.patchValue({Tracking: res.Tracking});
        }
      );
    }
    else{
      this.PaquetesService.putPaquete(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );
    }
  }
  onDelete(tracking, i){
    this.PaquetesService.deletePaquete(tracking).subscribe(
      res => {
        this.PaqueteForms.removeAt(i);
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
