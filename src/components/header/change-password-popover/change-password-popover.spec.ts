import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '../../../core/core.module';

import { TranslateModule } from '@ngx-translate/core';
import { PopoverController, IonicModule } from 'ionic-angular';
import { ChangePasswordPopoverComponent } from './change-password-popover';
import { ComponentsModule } from 'components/components.module';
import { ToastProvider } from 'providers/toast/toast';
import { AuthProvider } from 'providers/auth/auth';

describe('ChangePasswordPopoverComponent', () => {
  let component: ChangePasswordPopoverComponent;
  let popover: PopoverController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ToastProvider, AuthProvider, HttpClient],
      imports: [
        CoreModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        ComponentsModule,
        HttpClientModule,
        IonicModule.forRoot(ChangePasswordPopoverComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    popover = TestBed.get(PopoverController);
    component = popover.create(ChangePasswordPopoverComponent)._component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
