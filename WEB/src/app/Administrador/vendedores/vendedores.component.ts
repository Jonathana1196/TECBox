import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isLineBreak } from 'codelyzer/angular/sourceMappingVisitor';
import { timeout } from 'rxjs/operators';
import { VendedorService } from '../../shared/VendedorService';
@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {
  VendedorFroms: FormArray = this.fb.array([]);
  notification = null;
  constructor(private fb: FormBuilder,
    // tslint:disable-next-line:no-shadowed-variable
    private VendedorService: VendedorService) { }

  ngOnInit(): void {
    this.VendedorService.getVendedores().subscribe(
      res => {
        if (res === []) {
          this.addVendedor();
        }
        else {
          (res as []).forEach((Vendedor: any) => {
            this.VendedorFroms.push(this.fb.group({
              dataID: [1],
              Cedula: [Vendedor.cedula, Validators.required],
              Nombre: [Vendedor.nombre],
              Apellido: [Vendedor.apellido]
            }));
          });
        }
      }
    );
  }
  addVendedor() {
    this.VendedorFroms.push(this.fb.group({
      dataID: [0],
      Cedula: ['', Validators.required],
      Nombre: [''],
      Apellido: ['']
    }));
  }
  recordSubmit(fg: FormGroup) {
    if (fg.value.dataID === 0) {
      this.showNotification('insert');
      this.VendedorService.postVendedor(fg.value).subscribe(
        (res: any) => {
          fg.patchValue({ Cedula: res.Cedula });
        }
      );
    }
    else {
      this.VendedorService.putVendedor(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(Cedula, i) {
    this.VendedorService.deleteVendedor(Cedula).subscribe(
      res => {
        this.VendedorFroms.removeAt(i);
        this.showNotification('delete');
      }
    );
  }

  showNotification(category) {
    switch (category) {
      case 'insert':
        this.notification = { class: 'text-success', message: 'Saved' };
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
