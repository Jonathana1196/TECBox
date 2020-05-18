import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';
import {timeout} from 'rxjs/operators';
import {RolesService} from '../../shared/RolesService';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  RolesForms: FormArray = this.fb.array([]);
  notification = null;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private fb: FormBuilder, private RolesService: RolesService) { }

  ngOnInit(): void {
    this.RolesService.getRoles().subscribe(
      res => {
        if (res === []) {
          this.addRoles();
        }
        else{
          (res as []).forEach((rol: any) => {
            this.RolesForms.push(this.fb.group({
              dataID : [1],
              Id : [rol.id, Validators.required],
              Nombre : [rol.nombre],
              Descripcion : [rol.descripcion]
            }));
          });
        }
      }
    );
  }
  addRoles(){
    this.RolesForms.push(this.fb.group({
      dataID : [0],
      Id : ['', Validators.required],
      Nombre : [''],
      Descripcion : ['']
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.RolesService.postRol(fg.value).subscribe(
        (res: any) => {
          fg.patchValue({Id: res.Id});
        }
      );
    }
    else{
      this.RolesService.putRol(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(Id, i){
    this.RolesService.deleteRol(Id).subscribe(
      res => {
        this.RolesForms.removeAt(i);
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
