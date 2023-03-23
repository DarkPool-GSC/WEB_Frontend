import { TestBed } from '@angular/core/testing';

import { PerscriptionService } from './perscription.service';

describe('PerscriptionService', () => {
  let service: PerscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
