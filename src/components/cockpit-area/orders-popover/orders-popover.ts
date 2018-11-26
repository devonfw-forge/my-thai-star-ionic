import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { BookingView, OrderView } from '../../../viewModels/interfaces';
import {
  ITdDataTableColumn,
  TdDataTableService,
  IPageChangeEvent,
} from '@covalent/core';
import { config } from '../../../config';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { WaiterCockpitProvider } from '../../../providers/waiter-cockpit/waiter-cockpit';

@Component({
  selector: 'orders-popover',
  templateUrl: 'orders-popover.html',
})
export class OrdersPopoverComponent implements OnInit {
  private fromRow: number = 1;
  private currentPage: number = 1;

  pageSize: number = 4;

  data: any;
  datat: BookingView[] = [];
  columnst: ITdDataTableColumn[];

  datao: OrderView[] = [];
  columnso: ITdDataTableColumn[];

  pageSizes: number[] = config.pageSizesDialog;
  filteredData: OrderView[] = this.datao;
  totalPrice: number;

  constructor(
    private _dataTableService: TdDataTableService,
    private waiterCockpitProvider: WaiterCockpitProvider,
    private translate: TranslateService,
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) {
    this.data = navParams.get('data').row;
  }

  ngOnInit(): void {
    this.setTableHeaders();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setTableHeaders();
    });

    this.totalPrice = this.waiterCockpitProvider.getTotalPrice(
      this.data.orderLines,
    );
    this.datao = this.waiterCockpitProvider.orderComposer(this.data.orderLines);
    this.datat.push(this.data.booking);
    this.filter();
  }

  setTableHeaders(): void {
    this.translate.get('cockpit.table').subscribe((res: any) => {
      this.columnst = [
        { name: 'bookingDate', label: res.reservationDateH },
        { name: 'creationDate', label: res.creationDateH },
        { name: 'name', label: res.ownerH },
        { name: 'email', label: res.emailH },
        { name: 'tableId', label: res.tableH },
      ];
    });

    this.translate.get('cockpit.orders.dialogTable').subscribe((res: any) => {
      this.columnso = [
        { name: 'dish.name', label: res.dishH },
        { name: 'orderLine.comment', label: res.commentsH },
        { name: 'extras', label: res.extrasH },
        { name: 'orderLine.amount', label: res.quantityH },
        {
          name: 'dish.price',
          label: res.priceH,
          numeric: true,
          format: (v: number) => v.toFixed(2),
        },
      ];
    });
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  filter(): void {
    let newData: any[] = this.datao;
    newData = this._dataTableService.pageData(
      newData,
      this.fromRow,
      this.currentPage * this.pageSize,
    );
    setTimeout(() => (this.filteredData = newData));
  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }
}
