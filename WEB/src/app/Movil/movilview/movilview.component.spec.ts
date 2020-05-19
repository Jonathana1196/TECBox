import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovilviewComponent } from './movilview.component';

describe('MovilviewComponent', () => {
  let component: MovilviewComponent;
  let fixture: ComponentFixture<MovilviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovilviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovilviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
