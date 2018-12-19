import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material';

import { CoreModule } from '../../../core/core.module';

import { LoginPopoverComponent } from './login-popover';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'components/components.module';
import { IonicModule, PopoverController } from 'ionic-angular';

describe('LoginPopoverComponent', () => {
  let component: LoginPopoverComponent;
  let popover: PopoverController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        TranslateModule.forRoot(),
        BrowserAnimationsModule,
        ComponentsModule,
        IonicModule.forRoot(LoginPopoverComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    popover = TestBed.get(PopoverController);
    component = popover.create(LoginPopoverComponent)._component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
