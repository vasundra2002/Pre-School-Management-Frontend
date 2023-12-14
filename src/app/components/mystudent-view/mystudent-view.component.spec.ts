import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystudentViewComponent } from './mystudent-view.component';

describe('MystudentViewComponent', () => {
  let component: MystudentViewComponent;
  let fixture: ComponentFixture<MystudentViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MystudentViewComponent]
    });
    fixture = TestBed.createComponent(MystudentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
