import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  PopoverController,
} from 'ionic-angular';
import { WaiterCockpitProvider } from '../../providers/waiter-cockpit/waiter-cockpit';
import {
  Sorting,
  Pagination,
  FilterCockpit,
} from '../../backendModels/interfaces';
import { ReservationView } from '../../viewModels/interfaces';
import {
  ITdDataTableColumn,
  IPageChangeEvent,
  ITdDataTableSortChangeEvent,
  ITdDataTableSelectAllEvent,
} from '@covalent/core';
import { config } from '../../config';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import * as moment from 'moment';
import { ReservationsPopoverComponent } from '../../components/cockpit-area/reservations-popover/reservations-popover';

@IonicPage()
@Component({
  selector: 'page-reservations',
  templateUrl: 'reservations.html',
})
export class ReservationsPage {
  private sorting: Sorting[] = [];

  pagination: Pagination = {
    size: 8,
    page: 1,
    total: 1,
  };

  reservations: ReservationView;
  totalReservations: number;

  columns: ITdDataTableColumn[];

  pageSizes: number[] = config.pageSizes;

  filters: FilterCockpit = {
    bookingDate: undefined,
    email: undefined,
    bookingToken: undefined,
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private waiterCockpitProvider: WaiterCockpitProvider,
    private translate: TranslateService,
    private popoverCtrl: PopoverController,
  ) {}

  ngOnInit(): void {
    this.setTableHeaders();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setTableHeaders();
      moment.locale(this.translate.currentLang);
    });
    this.applyFilters();
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

  filter(): void {
    this.pagination.page = 1;
    this.applyFilters();
  }

  applyFilters(): void {
    this.waiterCockpitProvider
      .getReservations(this.pagination, this.sorting, this.filters)
      .subscribe((data: any) => {
        this.reservations = data.result;
        this.totalReservations = data.pagination.total;
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
      .create(ReservationsPopoverComponent, {
        width: '80%',
        data: selection,
      })
      .present();
  }
}
