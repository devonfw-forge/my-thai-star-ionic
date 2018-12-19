import { TestBed, inject } from '@angular/core/testing';

import { OrderProvider } from './order';

import { CoreModule } from '../../core/core.module';

describe('SidenavSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderProvider],
      imports: [CoreModule],
    });
  });

  it('should create', inject([OrderProvider], (service: OrderProvider) => {
    expect(service).toBeTruthy();
  }));
});
