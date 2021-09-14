import { TestBed } from '@angular/core/testing';

import { MytableService } from './mytable.service';

describe('MytableService', () => {
  let service: MytableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MytableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
