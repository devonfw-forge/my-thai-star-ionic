import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '../../../core/core.module';

import { TwitterAccountPopoverComponent } from './twitter-account-popover';
import { TranslateModule } from '@ngx-translate/core';
import { PopoverController, IonicModule } from 'ionic-angular';
import { ComponentsModule } from 'components/components.module';

describe('TwitterAccountPopoverComponent', () => {
  let component: TwitterAccountPopoverComponent;
  let popover: PopoverController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        TranslateModule.forRoot(),
        BrowserAnimationsModule,
        ComponentsModule,
        IonicModule.forRoot(TwitterAccountPopoverComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    popover = TestBed.get(PopoverController);
    component = popover.create(TwitterAccountPopoverComponent)._component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
