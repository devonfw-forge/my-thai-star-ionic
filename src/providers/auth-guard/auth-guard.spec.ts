import { CoreModule } from '../../core/core.module';
import { TestBed, inject } from '@angular/core/testing';
import { AuthGuardProvider } from './auth-guard';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';

describe('AuthGuardProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        TranslateModule.forRoot(),
        IonicModule.forRoot(AuthGuardProvider),
      ],
      providers: [AuthGuardProvider],
    });
  });

  it('should create', inject(
    [AuthGuardProvider],
    (service: AuthGuardProvider) => {
      expect(service).toBeTruthy();
    },
  ));
});
