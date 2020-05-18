import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';
import {timeout} from 'rxjs/operators';
import {ProductoService} from '../../shared/ProductoService';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  ProductosFroms: FormArray = this.fb.array([]);
  notification = null;
  VendedorList = [];
  constructor(private fb: FormBuilder,
              // tslint:disable-next-line:no-shadowed-variable
              private ProductoService: ProductoService) { }

  ngOnInit(): void {
    this.ProductoService.getVendedorList().subscribe(res => this.VendedorList = res as []);
    this.ProductoService.getProductos().subscribe(
      res => {
        if (res === []) {
          this.addProducto();
        }
        else{
          (res as []).forEach((Producto: any) => {
            this.ProductosFroms.push(this.fb.group({
              dataID : [1],
              Codigo: [Producto.codigo, Validators.required],
              Nombre : [Producto.nombre],
              Descripcion : [Producto.descripcion],
              Precio : [Producto.precio],
              Impuesto : [Producto.impuesto],
              Descuento : [Producto.descuento],
              Vendedor : [Producto.vendedor],
            }));
          });
        }
      }
    );
  }
  addProducto(){
    this.ProductosFroms.push(this.fb.group({
      dataID : [0],
      Codigo: ['', Validators.required],
      Nombre : [''],
      Descripcion : [''],
      Precio : [''],
      Impuesto : [''],
      Descuento : [''],
      Vendedor : [''],
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.ProductoService.postProducto(fg.value).subscribe(
        (res: any) => {
          fg.patchValue({Codigo: res.codigo});
        }
      );
    }
    else{
      this.ProductoService.putProducto(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(Codigo, i){
    this.ProductoService.deleteProductos(Codigo).subscribe(
      res => {
        this.ProductosFroms.removeAt(i);
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
