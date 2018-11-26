import { Component } from '@angular/core';
import { ToastProvider } from '../../../providers/toast/toast';
import { TranslateService } from '@ngx-translate/core';
import { BookTableProvider } from '../../../providers/book-table/book-table';
import * as moment from 'moment';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'invitation-popover',
  templateUrl: 'invitation-popover.html',
})
export class InvitationPopoverComponent {
  data: any;
  date: string;

  constructor(
    public toastProvider: ToastProvider,
    public invitationProvider: BookTableProvider,
    public translateService: TranslateService,
    public viewCtrl: ViewController,
    public navParams: NavParams,
  ) {
    this.data = navParams.get('data');
    this.date = moment(this.data.bookingDate).format('LLL');
  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }

  sendInvitation(): void {
    this.invitationProvider
      .postBooking(this.invitationProvider.composeBooking(this.data, 1))
      .subscribe(
        () => {
          this.translateService
            .get('bookTable.dialog.bookingSuccess')
            .subscribe((text: string) => {
              this.toastProvider.openToast(text, 4000, 'green');
            });
        },
        (error: any) => {
          this.translateService
            .get('bookTable.dialog.bookingError')
            .subscribe((text: string) => {
              this.toastProvider.openToast(text, 4000, 'red');
            });
        },
      );
    this.viewCtrl.dismiss();
  }
}
