import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystudentListComponent } from './mystudent-list.component';

describe('MystudentListComponent', () => {
  let component: MystudentListComponent;
  let fixture: ComponentFixture<MystudentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MystudentListComponent]
    });
    fixture = TestBed.createComponent(MystudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
