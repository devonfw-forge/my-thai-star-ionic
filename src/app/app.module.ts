import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { BookTablePageModule } from '../pages/book-table/book-table.module';
import { MenuPageModule } from '../pages/menu/menu.module';
import { ComponentsModule } from '../components/components.module';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { AuthGuardProvider } from '../providers/auth-guard/auth-guard';
import { AuthProvider } from '../providers/auth/auth';
import { ToastProvider } from '../providers/toast/toast';
import { HttpRequestInterceptorProvider } from '../providers/http-request-interceptor/http-request-interceptor';
import { WindowProvider } from '../providers/window/window';
import { BookTableProvider } from '../providers/book-table/book-table';
import { WaiterCockpitProvider } from '../providers/waiter-cockpit/waiter-cockpit';
import { MenuProvider } from '../providers/menu/menu';
import { PriceCalculatorProvider } from '../providers/price-calculator/price-calculator';
import { UserAreaProvider } from '../providers/user-area/user-area';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { OrderProvider } from '../providers/order/order';
import { OrdersPageModule } from '../pages/orders/orders.module';
import { ReservationsPageModule } from '../pages/reservations/reservations.module';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [MyApp],
  imports: [
    CoreModule,
    ComponentsModule,
    HomePageModule,
    BookTablePageModule,
    MenuPageModule,
    OrdersPageModule,
    ReservationsPageModule,
    BrowserModule,
    BrowserAnimationsModule,
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
    WaiterCockpitProvider,
    MenuProvider,
    PriceCalculatorProvider,
    UserAreaProvider,
    OrderProvider,
  ],
})
export class AppModule {}
