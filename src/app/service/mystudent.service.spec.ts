import { TestBed } from '@angular/core/testing';

import { MystudentService } from './mystudent.service';

describe('MystudentService', () => {
  let service: MystudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MystudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
