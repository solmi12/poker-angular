import { TestBed } from '@angular/core/testing';

import { VotsService } from './vots.service';

describe('VotsService', () => {
  let service: VotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
