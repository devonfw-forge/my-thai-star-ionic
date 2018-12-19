import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '../../core/core.module';
import { OrderProvider } from '../../providers/order/order';

import { ToastProvider } from '../../providers/toast/toast';
import { BookTableProvider } from '../../providers/book-table/book-table';
import { WindowProvider } from '../../providers/window/window';

import { BookTablePage } from './book-table';
import { emailValidator } from '../../directives/email-validator/email-validator';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { BookTablePageModule } from './book-table.module';
import { UserAreaProvider } from 'providers/user-area/user-area';

describe('BookTablePage', () => {
  let component: BookTablePage;
  let fixture: ComponentFixture<BookTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        OrderProvider,
        ToastProvider,
        WindowProvider,
        BookTableProvider,
        UserAreaProvider,
      ],
      imports: [
        ComponentsModule,
        DirectivesModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        IonicModule.forRoot(BookTablePage),
        CoreModule,
        BookTablePageModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Email should validate (easy)', () => {
    expect(emailValidator(new FormControl('bad@email').value)).toEqual(false);
    expect(emailValidator(new FormControl('good@email.com').value)).toEqual(
      true,
    );
  });
});
