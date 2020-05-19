import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecboxbComponent } from './tecboxb.component';

describe('TecboxbComponent', () => {
  let component: TecboxbComponent;
  let fixture: ComponentFixture<TecboxbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecboxbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecboxbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
