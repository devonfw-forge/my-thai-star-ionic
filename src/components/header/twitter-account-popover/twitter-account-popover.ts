import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'twitter-account-popover',
  templateUrl: 'twitter-account-popover.html',
})
export class TwitterAccountPopoverComponent {
  constructor(public viewCtrl: ViewController) {}

  twitterSubmit(form: FormGroup): void {
    // TODO
  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }
}
