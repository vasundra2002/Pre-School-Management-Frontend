import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystudentUpdateComponent } from './mystudent-update.component';

describe('MystudentUpdateComponent', () => {
  let component: MystudentUpdateComponent;
  let fixture: ComponentFixture<MystudentUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MystudentUpdateComponent]
    });
    fixture = TestBed.createComponent(MystudentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
