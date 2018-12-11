import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { UserAreaProvider } from '../../../providers/user-area/user-area';
import { FormGroup } from '@angular/forms';
import {
  trigger,
  style,
  state,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'change-password-popover',
  templateUrl: 'change-password-popover.html',
  animations: [
    trigger('itemState', [
      state('in', style({ transform: 'translateY(0)' })),
      //Enter
      transition('void => *', [
        style({
          transform: 'translateY(-100%)',
        }),
        animate('300ms linear'),
      ]),
    ]),
  ],
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
