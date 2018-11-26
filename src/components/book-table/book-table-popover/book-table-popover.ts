import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { BookTableProvider } from '../../../providers/book-table/book-table';
import { ToastProvider } from '../../../providers/toast/toast';
import * as moment from 'moment';

@Component({
  selector: 'book-table-popover',
  templateUrl: 'book-table-popover.html',
})
export class BookTablePopoverComponent {
  date: string;
  data: any;

  constructor(
    public viewCtrl: ViewController,
    public toastProvider: ToastProvider,
    public bookingProvider: BookTableProvider,
    public translateService: TranslateService,
    public navParams: NavParams,
  ) {
    this.data = navParams.get('data');
    this.date = moment(this.data.bookingDate).format('LLL');
  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }

  sendBooking(): void {
    this.bookingProvider
      .postBooking(this.bookingProvider.composeBooking(this.data, 0))
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
