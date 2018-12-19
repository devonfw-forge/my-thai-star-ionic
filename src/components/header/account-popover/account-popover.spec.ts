import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '../../../core/core.module';

import { TranslateModule } from '@ngx-translate/core';
import { PopoverController, IonicModule } from 'ionic-angular';
import { AccountPopoverComponent } from './account-popover';
import { ComponentsModule } from 'components/components.module';

describe('AccountPopoverComponent', () => {
  let component: AccountPopoverComponent;
  let popover: PopoverController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        ComponentsModule,
        HttpClientModule,
        IonicModule.forRoot(AccountPopoverComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    popover = TestBed.get(PopoverController);
    component = popover.create(AccountPopoverComponent)._component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
