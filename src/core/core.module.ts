import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OwlDateTimeModule, OwlDateTimeIntl } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import { MomentModule } from 'ngx-moment';

import { IonicModule } from 'ionic-angular';

// Moment locales
import 'moment/locale/es';
import 'moment/locale/fr';
import 'moment/locale/hi';
import 'moment/locale/pl';
import 'moment/locale/nl';
import 'moment/locale/de';
import 'moment/locale/ca';

import { AuthProvider } from '../providers/auth/auth';
import { AuthGuardProvider } from '../providers/auth-guard/auth-guard';
import { ToastProvider } from '../providers/toast/toast';
import { WindowProvider } from '../providers/window/window';
import { HttpRequestInterceptorProvider } from '../providers/http-request-interceptor/http-request-interceptor';
import { TooltipsModule } from 'ionic-tooltips';
import {
  CovalentExpansionPanelModule,
  CovalentDataTableModule,
  CovalentPagingModule,
} from '@covalent/core';
import {
  MatProgressBarModule,
  MatIconModule,
  MatSelectModule,
} from '@angular/material';

// Default text strings for OwlDateTime
export class DefaultIntl {
  cancelBtnLabel: string = '\u{2716}';
  setBtnLabel: String = '\u{2714}';
}

@NgModule({
  imports: [
    RouterModule,
    OwlDateTimeModule,
    OwlMomentDateTimeModule,
    IonicModule,
    CdkTableModule,
    TooltipsModule,
    MatIconModule,
  ],
  exports: [
    CommonModule,
    MomentModule,
    OwlDateTimeModule,
    OwlMomentDateTimeModule,
    HttpClientModule,
    CdkTableModule,
    TooltipsModule,
    CovalentExpansionPanelModule,
    MatProgressBarModule,
    MatIconModule,
    MatSelectModule,
    CovalentDataTableModule,
    CovalentPagingModule,
  ],
  providers: [
    AuthProvider,
    AuthGuardProvider,
    ToastProvider,
    WindowProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptorProvider,
      multi: true,
    },
    { provide: OwlDateTimeIntl, useClass: DefaultIntl },
  ],
})
export class CoreModule {}
