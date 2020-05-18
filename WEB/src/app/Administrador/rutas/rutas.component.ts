import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';
import {timeout} from 'rxjs/operators';
import {RutasService} from '../../shared/RutasService';


@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {
  RutasForms: FormArray = this.fb.array([]);
  notification = null;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private fb: FormBuilder, private RutasService: RutasService) { }

  ngOnInit(): void {
    this.RutasService.getRutas().subscribe(
      res => {
        if (res === []) {
          this.addRutas();
        }
        else{
          (res as []).forEach((ruta: any) => {
            this.RutasForms.push(this.fb.group({
              dataID : [1],
              Orden : [ruta.orden, Validators.required],
              Distrito : [ruta.distrito]
            }));
          });
        }
      }
    );
  }
  addRutas(){
    this.RutasForms.push(this.fb.group({
      dataID : [0],
      Orden : ['', Validators.required],
      Distrito : ['']
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.RutasService.postRuta(fg.value).subscribe(
        (res: any) => {
          fg.patchValue({Orden: res.Orden});
        }
      );
    }
    else{
      this.RutasService.putRuta(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(Id, i){
    this.RutasService.deleteRuta(Id).subscribe(
      res => {
        this.RutasForms.removeAt(i);
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
