import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RastreopComponent } from './rastreop.component';

describe('RastreopComponent', () => {
  let component: RastreopComponent;
  let fixture: ComponentFixture<RastreopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RastreopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RastreopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
