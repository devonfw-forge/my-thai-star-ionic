import { Component } from '@angular/core';
import {
  PopoverController,
  NavController,
  ViewController,
} from 'ionic-angular';
import { UserAreaProvider } from '../../../providers/user-area/user-area';
import { ChangePasswordPopoverComponent } from '../change-password-popover/change-password-popover';
import { TwitterAccountPopoverComponent } from '../twitter-account-popover/twitter-account-popover';
import { AuthProvider } from '../../../providers/auth/auth';
import { WindowProvider } from '../../../providers/window/window';

@Component({
  selector: 'account-popover',
  templateUrl: 'account-popover.html',
})
export class AccountPopoverComponent {
  constructor(
    public userProvider: UserAreaProvider,
    public popoverCtrl: PopoverController,
    public nav: NavController,
    public viewCtrl: ViewController,
    public auth: AuthProvider,
    public window: WindowProvider,
  ) {}

  openChangePasswordPopover(): void {
    this.viewCtrl.dismiss().then(() => {
      this.popoverCtrl
        .create(
          ChangePasswordPopoverComponent,
          {},
          { cssClass: this.window.responsiveWidth() },
        )
        .present();
    });
  }

  openTwitterAccountPopover(): void {
    this.viewCtrl.dismiss().then(() => {
      this.popoverCtrl
        .create(
          TwitterAccountPopoverComponent,
          {},
          { cssClass: this.window.responsiveWidth() },
        )
        .present();
    });
  }

  logout(): void {
    this.viewCtrl.dismiss().then(() => {
      this.userProvider.logout();
    });
  }
}
