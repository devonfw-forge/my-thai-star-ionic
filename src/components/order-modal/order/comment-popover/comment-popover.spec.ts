import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '../../../../core/core.module';

import { CommentPopoverComponent } from './comment-popover';
import { TranslateModule } from '@ngx-translate/core';
import { PopoverController, IonicModule } from 'ionic-angular';
import { ComponentsModule } from 'components/components.module';

describe('CommentPopoverComponent', () => {
  let component: CommentPopoverComponent;
  let popover: PopoverController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CoreModule,
        TranslateModule.forRoot(),
        ComponentsModule,
        IonicModule.forRoot(CommentPopoverComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    popover = TestBed.get(PopoverController);
    component = popover.create(CommentPopoverComponent)._component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
