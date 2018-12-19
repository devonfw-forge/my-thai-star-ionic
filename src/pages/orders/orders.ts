import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, PopoverController } from 'ionic-angular';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { WaiterCockpitProvider } from '../../providers/waiter-cockpit/waiter-cockpit';
import { Pageable, FilterCockpit } from '../../backendModels/interfaces';
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

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
// tslint:disable-next-line:component-class-suffix
export class OrdersPage implements OnInit {
  private pageable: Pageable = {
    pageSize: 8,
    pageNumber: 0,
    // total: 1,
  };
  private sorting: any[] = [];

  pageSize = 8;

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
  ) {}

  ngOnInit(): void {
    this.applyFilters();
    this.setTableHeaders();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      moment.locale(this.translate.currentLang);
      this.setTableHeaders();
    });
  }

  setTableHeaders(): void {
    this.translate.get('cockpit.table').subscribe((res: any) => {
      this.columns = [
        {
          name: 'booking.bookingDate',
          label: res.reservationDateH,
          width: { min: Math.max(90, 24 + res.reservationDateH.length * 8) },
        },
        {
          name: 'booking.email',
          label: res.emailH,
          width: { min: Math.max(150, 56 + res.emailH.length * 8) },
        },
        {
          name: 'booking.bookingToken',
          label: res.bookingTokenH,
          width: { min: Math.max(230, 56 + res.bookingTokenH.length * 8) },
        },
      ];
    });
  }

  applyFilters(): void {
    this.waiterCockpitProvider
      .getOrders(this.pageable, this.sorting, this.filters)
      .subscribe((data: any) => {
        if (!data) {
          this.orders = [];
          this.totalOrders = 0;
        } else {
          this.orders = data.content;
          this.totalOrders = data.totalElements;
        }
      });
  }

  clearFilters(filters: any): void {
    filters.reset();
    this.applyFilters();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.pageable = {
      pageSize: pagingEvent.pageSize,
      pageNumber: pagingEvent.page - 1,
      sort: this.pageable.sort,
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
      .create(
        OrdersPopoverComponent,
        {
          data: selection,
        },
        { cssClass: 'popover80' },
      )
      .present();
  }

  ionViewCanEnter(): boolean {
    return this.authGuard.canAccessWaiter();
  }
}
