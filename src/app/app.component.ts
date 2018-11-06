import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { BookTablePage } from '../pages/book-table/book-table';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { find } from 'lodash';
import { config } from '../config';

@Component({
  selector: 'public-main',
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav)
  nav: Nav;

  rootPage: any = HomePage;

  customerPages: Array<{ title: string; icon: string; component: any }>;
  waiterPages: Array<{ title: string; icon: string; component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public translate: TranslateService,
  ) {
    this.initializeApp();

    this.customerPages = [
      { title: 'HOME', icon: 'home', component: HomePage },
      { title: 'MENU', icon: 'restaurant', component: MenuPage },
      { title: 'BOOK TABLE', icon: 'bookmark', component: BookTablePage },
    ];

    translate.addLangs(config.langs.map((value: any) => value.value));
    translate.setDefaultLang('en');
    if (
      find(
        translate.getLangs(),
        (lang: string) => lang === translate.getBrowserLang(),
      )
    ) {
      translate.use(translate.getBrowserLang());
    }
    moment.locale(this.translate.currentLang);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
