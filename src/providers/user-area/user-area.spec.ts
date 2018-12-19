import { TestBed, inject } from '@angular/core/testing';

import { UserAreaProvider } from './user-area';
import { AuthProvider } from '../auth/auth';
import { CoreModule } from '../../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { ToastProvider } from 'providers/toast/toast';
import { IonicModule } from 'ionic-angular';

describe('UserAreaProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAreaProvider, AuthProvider, ToastProvider],
      imports: [
        CoreModule,
        HttpClientModule,
        TranslateModule.forRoot(),
        IonicModule.forRoot(UserAreaProvider),
      ],
    });
  });

  it('should create', inject(
    [UserAreaProvider],
    (service: UserAreaProvider) => {
      expect(service).toBeTruthy();
    },
  ));
});
