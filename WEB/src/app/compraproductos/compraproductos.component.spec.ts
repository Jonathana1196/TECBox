import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraproductosComponent } from './compraproductos.component';

describe('CompraproductosComponent', () => {
  let component: CompraproductosComponent;
  let fixture: ComponentFixture<CompraproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
