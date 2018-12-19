import { Injectable } from '@angular/core';

import { AuthProvider } from '../auth/auth';
import { ToastProvider } from '../toast/toast';
import { TranslateService } from '@ngx-translate/core';
import { Events } from 'ionic-angular';

@Injectable()
export class AuthGuardProvider {
  constructor(
    public toastCtrl: ToastProvider,
    public auth: AuthProvider,
    public translate: TranslateService,
    public events: Events,
  ) {}

  canAccessWaiter(): boolean {
    if (this.auth.isLogged() && this.auth.isPermited('WAITER')) {
      return true;
    }

    if (!this.auth.isLogged()) {
      this.translate.get('alerts.accessError').subscribe((text: string) => {
        this.toastCtrl.openToast(text, 4000, 'red');
      });
    }

    return false;
  }
}
