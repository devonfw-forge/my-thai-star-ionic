import { CoreModule } from '../../core/core.module';
import { TestBed, inject } from '@angular/core/testing';
import { AuthProvider } from './auth';

describe('AuthProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [AuthProvider],
    });
  });

  it('should create', inject([AuthProvider], (service: AuthProvider) => {
    expect(service).toBeTruthy();
  }));
});
