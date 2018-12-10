import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { UserAreaProvider } from '../../../providers/user-area/user-area';

@Component({
  selector: 'login-popover',
  templateUrl: 'login-popover.html',
})
export class LoginPopoverComponent {
  tab: string;
  loginForm: FormGroup;
  registerForm: FormGroup;
  constructor(
    public viewCtrl: ViewController,
    public userProvider: UserAreaProvider,
  ) {
    this.tab = 'login';
  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }

  submit(formValue: FormGroup): void {
    this.viewCtrl.dismiss(formValue).then((result) => {
      if (result.email) {
        this.userProvider.register(result.email, result.password);
      } else {
        this.userProvider.login(result.username, result.password);
      }
    });
  }
}
