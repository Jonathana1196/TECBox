import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarbComponent } from './navbarb.component';

describe('NavbarbComponent', () => {
  let component: NavbarbComponent;
  let fixture: ComponentFixture<NavbarbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
