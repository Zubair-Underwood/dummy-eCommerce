import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPortalComponent } from './main-portal.component';

describe('MainPortalComponent', () => {
  let component: MainPortalComponent;
  let fixture: ComponentFixture<MainPortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPortalComponent]
    });
    fixture = TestBed.createComponent(MainPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
