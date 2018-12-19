import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../../core/core.module';

import { ToastProvider } from '../../../providers/toast/toast';
import { BookTableProvider } from '../../../providers/book-table/book-table';
import { BookTablePopoverComponent } from './book-table-popover';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule, PopoverController } from 'ionic-angular';
import { ComponentsModule } from 'components/components.module';

describe('BookTablePopoverComponent', () => {
  let component: BookTablePopoverComponent;
  let popover: PopoverController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ToastProvider, BookTableProvider, HttpClient],
      imports: [
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        ComponentsModule,
        HttpClientModule,
        CoreModule,
        IonicModule.forRoot(BookTablePopoverComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    popover = TestBed.get(PopoverController);
    component = popover.create(BookTablePopoverComponent)._component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
