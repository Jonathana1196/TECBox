import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {PaquetesService} from '../../shared/PaquetesService';
import {PaquetesComponent} from '../../Bodeguero/paquetes/paquetes.component';

@Component({
  selector: 'app-rastreop',
  templateUrl: './rastreop.component.html',
  styleUrls: ['./rastreop.component.css']
})
export class RastreopComponent implements OnInit {
  PaqueteForms: FormArray = this.fb.array([]);
  data = new PaquetesComponent(this.fb, this.PaquetesService);

  constructor(private fb: FormBuilder,
              // tslint:disable-next-line:no-shadowed-variable
              private PaquetesService: PaquetesService) { }

  ngOnInit(): void {
  }
  search(data){
    data.startds();
  }
}
