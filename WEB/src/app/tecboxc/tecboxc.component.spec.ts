import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecboxcComponent } from './tecboxc.component';

describe('TecboxcComponent', () => {
  let component: TecboxcComponent;
  let fixture: ComponentFixture<TecboxcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecboxcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecboxcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
