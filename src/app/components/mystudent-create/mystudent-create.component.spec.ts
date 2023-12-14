import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystudentCreateComponent } from './mystudent-create.component';

describe('MystudentCreateComponent', () => {
  let component: MystudentCreateComponent;
  let fixture: ComponentFixture<MystudentCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MystudentCreateComponent]
    });
    fixture = TestBed.createComponent(MystudentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
