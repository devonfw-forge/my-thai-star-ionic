import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthProvider } from '../auth/auth';
import { ToastProvider } from '../toast/toast';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AuthGuardProvider implements CanActivate {
  constructor(
    public toastCtrl: ToastProvider,
    private AuthProvider: AuthProvider,
    private translate: TranslateService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    if (
      this.AuthProvider.isLogged() &&
      this.AuthProvider.isPermited('WAITER')
    ) {
      return true;
    }

    if (!this.AuthProvider.isLogged()) {
      this.translate.get('alerts.accessError').subscribe((text: string) => {
        this.toastCtrl.openToast(text, 4000, 'red');
      });
    }

    if (this.router.url === '/') {
      this.router.navigate(['/restaurant']);
    }
    return false;
  }
}
