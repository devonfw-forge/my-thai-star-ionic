import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { BookTablePageModule } from '../pages/book-table/book-table.module';
import { MenuPageModule } from '../pages/menu/menu.module';
import { ComponentsModule } from '../components/components.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthGuardProvider } from '../providers/auth-guard/auth-guard';
import { AuthProvider } from '../providers/auth/auth';
import { ToastProvider } from '../providers/toast/toast';
import { HttpRequestInterceptorProvider } from '../providers/http-request-interceptor/http-request-interceptor';
import { WindowProvider } from '../providers/window/window';
import { BookTableProvider } from '../providers/book-table/book-table';
import { EmailConfirmationsProvider } from '../providers/email-confirmations/email-confirmations';
import { WaiterCockpitProvider } from '../providers/waiter-cockpit/waiter-cockpit';
import { MenuProvider } from '../providers/menu/menu';
import { PriceCalculatorProvider } from '../providers/price-calculator/price-calculator';
import { UserAreaProvider } from '../providers/user-area/user-area';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [MyApp],
  imports: [
    HomePageModule,
    BookTablePageModule,
    MenuPageModule,
    ComponentsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthGuardProvider,
    AuthProvider,
    ToastProvider,
    HttpRequestInterceptorProvider,
    WindowProvider,
    BookTableProvider,
    EmailConfirmationsProvider,
    WaiterCockpitProvider,
    EmailConfirmationsProvider,
    MenuProvider,
    PriceCalculatorProvider,
    UserAreaProvider,
  ],
})
export class AppModule {}
