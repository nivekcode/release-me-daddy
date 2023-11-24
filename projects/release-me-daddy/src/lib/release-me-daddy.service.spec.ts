import { TestBed } from '@angular/core/testing';

import { ReleaseMeDaddyService } from './release-me-daddy.service';

describe('ReleaseMeDaddyService', () => {
  let service: ReleaseMeDaddyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReleaseMeDaddyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
