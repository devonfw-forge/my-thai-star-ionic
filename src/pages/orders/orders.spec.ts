import { HttpClient } from '@angular/common/http';

import { TranslateService } from '@ngx-translate/core';
import { PopoverController, NavController } from 'ionic-angular';
import { OrdersPage } from './orders';
import { WaiterCockpitProvider } from 'providers/waiter-cockpit/waiter-cockpit';
import { PriceCalculatorProvider } from 'providers/price-calculator/price-calculator';
import { AuthGuardProvider } from 'providers/auth-guard/auth-guard';

describe('OrderCockpitComponent', () => {
  let component: OrdersPage;
  let http: HttpClient;
  let priceCalculator: PriceCalculatorProvider;
  let waiterCockpitProvider: WaiterCockpitProvider;
  // tslint:disable-next-line:prefer-const
  let translate: TranslateService;
  // tslint:disable-next-line:prefer-const
  let popover: PopoverController;
  let authGuardProvider: AuthGuardProvider;
  let navCtrl: NavController;

  beforeEach(() => {
    priceCalculator = new PriceCalculatorProvider();
    waiterCockpitProvider = new WaiterCockpitProvider(http, priceCalculator);
    component = new OrdersPage(
      popover,
      translate,
      waiterCockpitProvider,
      authGuardProvider,
      navCtrl,
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
