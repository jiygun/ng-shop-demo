import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBottomMenuComponent } from './nav-bottom-menu.component';

describe('NavBottomMenuComponent', () => {
  let component: NavBottomMenuComponent;
  let fixture: ComponentFixture<NavBottomMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBottomMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBottomMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
