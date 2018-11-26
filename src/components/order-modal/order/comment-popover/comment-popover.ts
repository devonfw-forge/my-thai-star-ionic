import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'comment-popover',
  templateUrl: 'comment-popover.html',
})
export class CommentPopoverComponent {
  constructor(private viewCtrl: ViewController) {}

  dismiss(): void {
    this.viewCtrl.dismiss();
  }

  sendComment(comment: string): void {
    this.viewCtrl.dismiss(comment);
  }
}
