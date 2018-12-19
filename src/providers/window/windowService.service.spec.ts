import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { WindowProvider } from './window';

describe('WindowProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WindowProvider],
    });
  });

  it('should create', inject([WindowProvider], (service: WindowProvider) => {
    expect(service).toBeTruthy();
  }));
});
