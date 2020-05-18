import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecboxaComponent } from './tecboxa.component';

describe('TecboxaComponent', () => {
  let component: TecboxaComponent;
  let fixture: ComponentFixture<TecboxaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecboxaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecboxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
