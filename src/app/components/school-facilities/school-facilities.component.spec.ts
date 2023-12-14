import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolFacilitiesComponent } from './school-facilities.component';

describe('SchoolFacilitiesComponent', () => {
  let component: SchoolFacilitiesComponent;
  let fixture: ComponentFixture<SchoolFacilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolFacilitiesComponent]
    });
    fixture = TestBed.createComponent(SchoolFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
