import { TestBed } from '@angular/core/testing';

import { ApidriverService } from './apidriver.service';

describe('ApidriverService', () => {
  let service: ApidriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApidriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
