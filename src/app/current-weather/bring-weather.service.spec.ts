import { TestBed } from '@angular/core/testing';

import { BringWeatherService } from '../bring-weather.service';

describe('BringWeatherService', () => {
  let service: BringWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BringWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
