import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateTimeAdapter } from 'ng-pick-datetime';

import { CoreModule } from '../../core/core.module';

import { HeaderComponent } from './header';
import { TranslateModule } from '@ngx-translate/core';
import { WindowProvider } from 'providers/window/window';
import { AuthProvider } from 'providers/auth/auth';
import { UserAreaProvider } from 'providers/user-area/user-area';
import { ToastProvider } from 'providers/toast/toast';
import { IonicModule } from 'ionic-angular';
import { ComponentsModule } from 'components/components.module';
import { OrderProvider } from 'providers/order/order';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        WindowProvider,
        AuthProvider,
        UserAreaProvider,
        ToastProvider,
        HttpClient,
        DateTimeAdapter,
        OrderProvider,
      ],
      imports: [
        IonicModule.forRoot(HeaderComponent),
        ComponentsModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        CoreModule,
        HttpClientModule,
      ],
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
