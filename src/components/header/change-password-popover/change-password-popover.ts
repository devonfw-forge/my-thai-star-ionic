import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { UserAreaProvider } from '../../../providers/user-area/user-area';
import { FormGroup } from '@angular/forms';

/**
 * Generated class for the ChangePasswordPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'change-password-popover',
  templateUrl: 'change-password-popover.html',
})
export class ChangePasswordPopoverComponent {
  constructor(
    public viewCtrl: ViewController,
    public userProvider: UserAreaProvider,
  ) {}

  dismiss(): void {
    this.viewCtrl.dismiss();
  }

  passwordSubmit(form: FormGroup): void {
    this.viewCtrl.dismiss();
    this.userProvider.changePassword(form);
  }
}
