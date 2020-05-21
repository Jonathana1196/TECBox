import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';
import {timeout} from 'rxjs/operators';
import {ProductoService} from '../../shared/ProductoService';

@Component({
  selector: 'app-tecboxc',
  templateUrl: './tecboxc.component.html',
  styleUrls: ['./tecboxc.component.css']
})
export class TecboxcComponent implements OnInit {
  Productos: FormArray = this.fb.array([]);
  notification = null;

  constructor(private fb: FormBuilder,
              // tslint:disable-next-line:no-shadowed-variable
              private ProductoService: ProductoService) { }

  ngOnInit(): void {
    this.ProductoService.getProductos().subscribe(
      res => {
        (res as []).forEach((Producto: any) => {
          this.Productos.push(this.fb.group({
            dataID : [1],
            Codigo: [Producto.codigo, Validators.required],
            Nombre : [Producto.nombre],
            Descripcion : [Producto.descripcion],
            Precio : [Producto.precio],
            Impuesto : [Producto.impuesto],
            Descuento : [Producto.descuento]
          }));
        });
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
