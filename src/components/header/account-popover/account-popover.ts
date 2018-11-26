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
  ) {}

  openChangePasswordPopover(): void {
    this.viewCtrl.dismiss().then(() => {
      this.popoverCtrl.create(ChangePasswordPopoverComponent).present();
    });
  }

  openTwitterAccountPopover(): void {
    this.viewCtrl.dismiss().then(() => {
      this.popoverCtrl.create(TwitterAccountPopoverComponent).present();
    });
  }

  logout(): void {
    this.viewCtrl.dismiss().then(() => {
      this.userProvider.logout();
    });
  }
}
