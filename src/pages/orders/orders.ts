import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, PopoverController } from 'ionic-angular';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { WaiterCockpitProvider } from '../../providers/waiter-cockpit/waiter-cockpit';
import { Pagination, FilterCockpit } from '../../backendModels/interfaces';
import * as moment from 'moment';
import { OrdersPopoverComponent } from '../../components/cockpit-area/orders-popover/orders-popover';
import {
  IPageChangeEvent,
  ITdDataTableSelectAllEvent,
  ITdDataTableColumn,
  ITdDataTableSortChangeEvent,
} from '@covalent/core';
import { config } from '../../config';
import { OrderListView } from '../../viewModels/interfaces';
import { AuthGuardProvider } from '../../providers/auth-guard/auth-guard';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage implements OnInit {
  private pagination: Pagination = {
    size: 8,
    page: 1,
    total: 1,
  };
  private sorting: any[] = [];

  pageSize: number = 8;

  orders: OrderListView[];
  totalOrders: number;

  columns: ITdDataTableColumn[];

  pageSizes: number[] = config.pageSizes;

  filters: FilterCockpit = {
    bookingDate: undefined,
    email: undefined,
    bookingToken: undefined,
  };

  constructor(
    private popoverCtrl: PopoverController,
    private translate: TranslateService,
    private waiterCockpitProvider: WaiterCockpitProvider,
    private authGuard: AuthGuardProvider,
    public navCtrl: NavController,
    public auth: AuthProvider,
  ) {}

  ngOnInit(): void {
    this.applyFilters();
    this.setTableHeaders();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setTableHeaders();
      moment.locale(this.translate.currentLang);
    });
  }

  setTableHeaders(): void {
    this.translate.get('cockpit.table').subscribe((res: any) => {
      this.columns = [
        { name: 'booking.bookingDate', label: res.reservationDateH },
        { name: 'booking.email', label: res.emailH },
        { name: 'booking.bookingToken', label: res.bookingTokenH },
      ];
    });
  }

  applyFilters(): void {
    this.waiterCockpitProvider
      .getOrders(this.pagination, this.sorting, this.filters)
      .subscribe((data: any) => {
        this.orders = data.result;
        this.totalOrders = data.pagination.total;
      });
  }

  clearFilters(filters: any): void {
    filters.reset();
    this.applyFilters();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.pagination = {
      size: pagingEvent.pageSize,
      page: pagingEvent.page,
      total: 1,
    };
    this.applyFilters();
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sorting = [];
    this.sorting.push({
      name: sortEvent.name.split('.').pop(),
      direction: '' + sortEvent.order,
    });
    this.applyFilters();
  }

  selected(selection: ITdDataTableSelectAllEvent): void {
    this.popoverCtrl
      .create(OrdersPopoverComponent, {
        width: '80%',
        data: selection,
      })
      .present();
  }

  ionViewCanEnter(): boolean {
    return this.authGuard.canAccessWaiter();
  }
}
