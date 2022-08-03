import { TestBed } from '@angular/core/testing';

import { AxiosClient } from './axios.service';

describe('AxiosClient', () => {
  let service: AxiosClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxiosClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
