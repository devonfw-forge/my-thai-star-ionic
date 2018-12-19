import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { CoreModule } from '../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenuPage } from './menu';

import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'components/components.module';
import { MenuPageModule } from './menu.module';
import { IonicModule, NavController } from 'ionic-angular';
import { MenuProvider } from 'providers/menu/menu';
import { OrderProvider } from 'providers/order/order';
import { ToastProvider } from 'providers/toast/toast';
import { AuthProvider } from 'providers/auth/auth';

describe('MenuPage', () => {
  let component: MenuPage;
  let http: HttpClient;
  let menuService: MenuProvider;
  let navCtrl: NavController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        HttpClient,
        OrderProvider,
        MenuProvider,
        ToastProvider,
        AuthProvider,
      ],
      imports: [
        BrowserAnimationsModule,
        BrowserDynamicTestingModule,
        HttpClientModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
        CoreModule,
        ComponentsModule,
        MenuPageModule,
        IonicModule.forRoot(MenuPage),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    menuService = new MenuProvider(http);
    component = new MenuPage(navCtrl, menuService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
