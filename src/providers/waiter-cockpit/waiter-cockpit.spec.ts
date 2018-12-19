import { TestBed, inject } from '@angular/core/testing';

import { OrderView } from '../../viewModels/interfaces';
import { WaiterCockpitProvider } from './waiter-cockpit';
import { HttpClientModule } from '@angular/common/http';
import { PriceCalculatorProvider } from 'providers/price-calculator/price-calculator';

describe('WaiterCockpitProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaiterCockpitProvider, PriceCalculatorProvider],
      imports: [HttpClientModule],
    });
  });

  it('should create', inject(
    [WaiterCockpitProvider],
    (service: WaiterCockpitProvider) => {
      expect(service).toBeTruthy();
    },
  ));

  describe('Form composer', () => {
    it('should compose correctly order info', inject(
      [WaiterCockpitProvider],
      (service: WaiterCockpitProvider) => {
        const orderData: OrderView[] = [
          {
            dish: {
              id: 0,
              name: 'dish1',
              price: 14.75,
            },
            extras: [
              { id: 0, price: 1, name: 'Extra Curry' },
              { id: 1, price: 2, name: 'Extra pork' },
            ],
            orderLine: {
              amount: 2,
              comment: 'comment',
            },
          },
          {
            dish: {
              id: 0,
              name: 'dish2',
              price: 12.15,
            },
            extras: [{ id: 0, price: 1, name: 'Extra Curry' }],
            orderLine: {
              amount: 1,
              comment: '',
            },
          },
        ];

        const orderResult: any = [
          {
            dish: { id: 0, name: 'dish1', price: (14.75 + 1 + 2) * 2 },
            extras: 'Extra Curry, Extra pork',
            orderLine: { amount: 2, comment: 'comment' },
          },
          {
            dish: { id: 0, name: 'dish2', price: 12.15 + 1 },
            extras: 'Extra Curry',
            orderLine: { amount: 1, comment: '' },
          },
        ]; // 2 dishes + 1 extra curry + 2 extra pork // 1 extra curry

        expect(service.orderComposer(orderData)).toEqual(orderResult);
      },
    ));
  });
});
