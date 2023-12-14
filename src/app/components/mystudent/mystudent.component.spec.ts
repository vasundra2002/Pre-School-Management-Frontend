import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystudentComponent } from './mystudent.component';

describe('MystudentComponent', () => {
  let component: MystudentComponent;
  let fixture: ComponentFixture<MystudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MystudentComponent]
    });
    fixture = TestBed.createComponent(MystudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
