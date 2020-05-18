import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecboxrComponent } from './tecboxr.component';

describe('TecboxrComponent', () => {
  let component: TecboxrComponent;
  let fixture: ComponentFixture<TecboxrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecboxrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecboxrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
