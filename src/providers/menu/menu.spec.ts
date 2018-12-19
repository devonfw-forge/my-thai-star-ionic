import { TestBed, inject } from '@angular/core/testing';
import { MenuProvider } from './menu';
import { HttpClientModule } from '@angular/common/http';

describe('MenuProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MenuProvider],
    });
  });

  it('should create', inject([MenuProvider], (service: MenuProvider) => {
    expect(service).toBeTruthy();
  }));
});
