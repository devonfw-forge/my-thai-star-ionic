import { CoreModule } from '../../core/core.module';
import { TestBed, inject } from '@angular/core/testing';
import { HttpRequestInterceptorProvider } from './http-request-interceptor';

describe('HttpRequestInterceptorProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [HttpRequestInterceptorProvider],
    });
  });

  it('should create', inject(
    [HttpRequestInterceptorProvider],
    (service: HttpRequestInterceptorProvider) => {
      expect(service).toBeTruthy();
    },
  ));
});
