import { Injectable } from '@angular/core';
import { ToastProvider } from '../toast/toast';
import { AuthProvider } from '../auth/auth';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Events } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { OrdersPage } from '../../pages/orders/orders';
import { HomePage } from '../../pages/home/home';

@Injectable()
export class UserAreaProvider {
  private readonly loginRestPath: string = 'login';
  private readonly currentUserRestPath: string = 'security/v1/currentuser/';
  private readonly registerRestPath: string = 'register';
  private readonly changePasswordRestPath: string = 'changepassword';
  authAlerts: any;

  constructor(
    public toastprovider: ToastProvider,
    public events: Events,
    public translate: TranslateService,
    private http: HttpClient,
    public AuthProvider: AuthProvider,
  ) {
    this.translate.get('alerts.authAlerts').subscribe((result: any) => {
      this.authAlerts = result;
    });
  }

  login(username: string, password: string): void {
    this.http
      .post(
        `${environment.restPathRoot}${this.loginRestPath}`,
        { username: username, password: password },
        { responseType: 'text', observe: 'response' },
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.AuthProvider.setToken(res.headers.get('Authorization'));
          this.http
            .get(`${environment.restServiceRoot}${this.currentUserRestPath}`)
            .subscribe((loginInfo: any) => {
              console.log(loginInfo);
              this.AuthProvider.setLogged(true);
              this.AuthProvider.setUser(loginInfo.name);
              this.AuthProvider.setRole(loginInfo.role);
              this.events.publish('navTo', OrdersPage);
              this.toastprovider.openToast(
                this.authAlerts.loginSuccess,
                4000,
                'green',
              );
            });
        },
        (err: any) => {
          this.AuthProvider.setLogged(false);
          this.toastprovider.openToast(err.message, 4000, 'red');
        },
      );
  }

  register(email: string, password: string): void {
    this.http
      .post(`${environment.restServiceRoot}${this.registerRestPath}`, {
        email: email,
        password: password,
      })
      // .map((res: LoginInfo) => res)
      .subscribe(
        () => {
          this.toastprovider.openToast(
            this.authAlerts.registerSuccess,
            4000,
            'green',
          );
        },
        (error: any) => {
          this.toastprovider.openToast(
            this.authAlerts.registerFail,
            4000,
            'red',
          );
        },
      );
  }

  logout(): void {
    this.AuthProvider.setLogged(false);
    this.AuthProvider.setUser('');
    this.AuthProvider.setRole('CUSTOMER');
    this.AuthProvider.setToken('');
    this.events.publish('navTo', HomePage);
    this.toastprovider.openToast(this.authAlerts.logoutSuccess, 4000, 'black');
  }

  changePassword(data: any): void {
    data.username = this.AuthProvider.getUser();
    this.http
      .post(`${environment.restServiceRoot}${this.changePasswordRestPath}`, {
        username: data.username,
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      })
      .subscribe(
        (res: any) => {
          this.toastprovider.openToast(res.message, 4000, 'green');
        },
        (error: any) => {
          this.toastprovider.openToast(error.message, 4000, 'red');
        },
      );
  }
}
