import { HttpClient } from '@angular/common/http';

import { TranslateService } from '@ngx-translate/core';
import { PriceCalculatorProvider } from 'providers/price-calculator/price-calculator';
import { WaiterCockpitProvider } from 'providers/waiter-cockpit/waiter-cockpit';
import { PopoverController, NavController } from 'ionic-angular';
import { ReservationsPage } from './reservations';

describe('ReservationCockpitComponent', () => {
  let component: ReservationsPage;
  // tslint:disable-next-line:prefer-const
  let http: HttpClient;
  let priceCalculator: PriceCalculatorProvider;
  let waiterCockpitProvider: WaiterCockpitProvider;
  // tslint:disable-next-line:prefer-const
  let translate: TranslateService;
  // tslint:disable-next-line:prefer-const
  let popover: PopoverController;
  // tslint:disable-next-line:prefer-const
  let navCtrl: NavController;

  beforeEach(() => {
    priceCalculator = new PriceCalculatorProvider();
    waiterCockpitProvider = new WaiterCockpitProvider(http, priceCalculator);
    component = new ReservationsPage(
      navCtrl,
      waiterCockpitProvider,
      translate,
      popover,
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
