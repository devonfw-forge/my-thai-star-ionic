import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order';
import { CoreModule } from '../../../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { OrderProvider } from 'providers/order/order';
import { PriceCalculatorProvider } from 'providers/price-calculator/price-calculator';
import { ToastProvider } from 'providers/toast/toast';
import { ComponentsModule } from 'components/components.module';
import { IonicModule } from 'ionic-angular';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [OrderProvider, PriceCalculatorProvider, ToastProvider],
      imports: [
        CoreModule,
        TranslateModule.forRoot(),
        HttpClientModule,
        ComponentsModule,
        IonicModule.forRoot(OrderComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    component.order = {
      dish: {
        id: 0,
        name: 'Red Curry',
        price: 5.9,
      },
      orderLine: {
        amount: 0,
        comment: 'comment',
      },
      extras: [
        { id: 0, name: 'Tofu', price: 1, selected: false },
        { id: 1, name: 'Chiken', price: 1, selected: false },
        { id: 2, name: 'Pork', price: 2, selected: false },
      ],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
