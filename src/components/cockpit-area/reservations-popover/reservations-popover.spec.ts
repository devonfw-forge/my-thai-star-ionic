import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../../../core/core.module';

import { TranslateModule } from '@ngx-translate/core';
import { PopoverController, IonicModule } from 'ionic-angular';
import { WaiterCockpitProvider } from 'providers/waiter-cockpit/waiter-cockpit';
import { PriceCalculatorProvider } from 'providers/price-calculator/price-calculator';
import { AppModule } from 'app/app.module';
import { ComponentsModule } from 'components/components.module';
import { ReservationsPopoverComponent } from './reservations-popover';

describe('ReservationsPopoverComponent', () => {
  let component: ReservationsPopoverComponent;
  let popover: PopoverController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [WaiterCockpitProvider, PriceCalculatorProvider, HttpClient],
      imports: [
        AppModule,
        IonicModule.forRoot('ReservationsPopoverComponent'),
        ComponentsModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        CoreModule,
        HttpClientModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    popover = TestBed.get(PopoverController);
    component = popover.create(ReservationsPopoverComponent, {
      data: { dialogData: { row: undefined } },
    })._component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
