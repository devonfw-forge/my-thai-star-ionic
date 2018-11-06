import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PriceCalculatorProvider } from '../price-calculator/price-calculator';
import {
  BookingResponse,
  OrderResponse,
  OrderView,
  OrderViewResult,
} from '../../viewModels/interfaces';
import { map, cloneDeep } from 'lodash';
import {
  Pagination,
  Sorting,
  FilterCockpit,
} from '../../backendModels/interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class WaiterCockpitProvider {
  private readonly getReservationsRestPath: string =
    'bookingmanagement/v1/booking/search';
  private readonly getOrdersRestPath: string =
    'ordermanagement/v1/order/search';
  private readonly filterOrdersRestPath: string =
    'ordermanagement/v1/order/search';

  constructor(
    private http: HttpClient,
    private priceCalculator: PriceCalculatorProvider,
  ) {}

  getOrders(
    pagination: Pagination,
    sorting: Sorting[],
    filters: FilterCockpit,
  ): Observable<OrderResponse[]> {
    let path: string;
    filters.pagination = pagination;
    filters.sort = sorting;
    if (filters.email || filters.bookingToken) {
      path = this.filterOrdersRestPath;
    } else {
      delete filters.email;
      delete filters.bookingToken;
      path = this.getOrdersRestPath;
    }
    return this.http.post<OrderResponse[]>(
      `${environment.restServiceRoot}${path}`,
      filters,
    );
  }

  getReservations(
    pagination: Pagination,
    sorting: Sorting[],
    filters: FilterCockpit,
  ): Observable<BookingResponse[]> {
    filters.pagination = pagination;
    filters.sort = sorting;
    return this.http.post<BookingResponse[]>(
      `${environment.restServiceRoot}${this.getReservationsRestPath}`,
      filters,
    );
  }

  orderComposer(orderList: OrderView[]): OrderView[] {
    let orders: OrderView[] = cloneDeep(orderList);
    map(orders, (o: OrderViewResult) => {
      o.dish.price = this.priceCalculator.getPrice(o);
      o.extras = map(o.extras, 'name').join(', ');
    });
    return orders;
  }

  getTotalPrice(orderLines: OrderView[]): number {
    return this.priceCalculator.getTotalPrice(orderLines);
  }
}
