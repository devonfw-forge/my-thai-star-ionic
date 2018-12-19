import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BookTableProvider } from '../../../providers/book-table/book-table';
import { ToastProvider } from '../../../providers/toast/toast';

import { TranslateModule } from '@ngx-translate/core';
import { PopoverController, IonicModule } from 'ionic-angular';
import { AppModule } from 'app/app.module';
import { MyApp } from 'app/app.component';
import { ComponentsModule } from 'components/components.module';
import { InvitationPopoverComponent } from './invitation-popover';

describe('InvitationPopoverComponent', () => {
  let component: InvitationPopoverComponent;
  let popover: PopoverController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ToastProvider, BookTableProvider, HttpClient],
      imports: [
        AppModule,
        IonicModule.forRoot(InvitationPopoverComponent),
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        ComponentsModule,
        HttpClientModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    popover = TestBed.get(PopoverController);
    component = popover.create(InvitationPopoverComponent)._component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
