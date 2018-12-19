import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, PopoverController } from 'ionic-angular';
import { WaiterCockpitProvider } from '../../providers/waiter-cockpit/waiter-cockpit';
import { Pageable, FilterCockpit, Sort } from '../../backendModels/interfaces';
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
// tslint:disable-next-line:component-class-suffix
export class ReservationsPage implements OnInit {
  private sorting: Sort[] = [];

  pageable: Pageable = {
    pageSize: 8,
    pageNumber: 0,
    // total: 1,
  };

  reservations: ReservationView[];
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
    private waiterCockpitProvider: WaiterCockpitProvider,
    private translate: TranslateService,
    private popoverCtrl: PopoverController,
  ) {}

  ngOnInit(): void {
    this.setTableHeaders();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      moment.locale(this.translate.currentLang);
      this.setTableHeaders();
    });
    this.applyFilters();
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

  filter(): void {
    this.pageable.pageNumber = 0;
    this.applyFilters();
  }

  applyFilters(): void {
    this.waiterCockpitProvider
      .getReservations(this.pageable, this.sorting, this.filters)
      .subscribe((data: any) => {
        if (!data) {
          this.reservations = [];
          this.totalReservations = 0;
        } else {
          this.reservations = data.content;
          this.totalReservations = data.totalElements;
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
      property: sortEvent.name.split('.').pop(),
      direction: '' + sortEvent.order,
    });
    this.applyFilters();
  }

  selected(selection: ITdDataTableSelectAllEvent): void {
    this.popoverCtrl
      .create(
        ReservationsPopoverComponent,
        {
          data: selection,
        },
        { cssClass: 'popover80' },
      )
      .present();
  }
}
