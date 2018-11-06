import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the BookTablePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-table',
  templateUrl: 'book-table.html',
})
export class BookTablePage {
  tab: string;

  constructor(public navCtrl: NavController) {
    this.tab = 'book';
  }
}
