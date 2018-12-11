import { Component, OnInit } from '@angular/core';
import { FriendsInvite } from '../../../backendModels/interfaces';
import {
  ITdDataTableColumn,
  TdDataTableService,
  IPageChangeEvent,
} from '@covalent/core';
import { config } from '../../../config';
import { ReservationView } from '../../../viewModels/interfaces';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'reservations-popover',
  templateUrl: 'reservations-popover.html',
})
export class ReservationsPopoverComponent implements OnInit {
  datao: FriendsInvite[] = [];
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 4;

  data: any;
  columnso: ITdDataTableColumn[] = [
    { name: 'email', label: 'Guest email' },
    { name: 'accepted', label: 'Acceptances and declines' },
  ];
  pageSizes: number[] = config.pageSizesDialog;
  datat: ReservationView[] = [];
  columnst: ITdDataTableColumn[];

  filteredData: any[] = this.datao;

  constructor(
    private _dataTableService: TdDataTableService,
    private translate: TranslateService,
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) {
    this.data = navParams.get('data').row;
    this.pageSizes = config.pageSizesDialog;
  }

  ngOnInit(): void {
    this.setTableHeaders();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setTableHeaders();
    });

    this.datat.push(this.data);
    this.datao = this.data.invitedGuests;
    this.filter();
  }

  setTableHeaders(): void {
    this.translate.get('cockpit.table').subscribe((res: any) => {
      this.columnst = [
        {
          name: 'booking.bookingDate',
          label: res.reservationDateH,
          width: { min: Math.max(90, 24 + res.reservationDateH.length * 8) },
        },
        {
          name: 'booking.creationDate',
          label: res.creationDateH,
          width: { min: Math.max(90, 24 + res.creationDateH.length * 8) },
        },
        {
          name: 'booking.name',
          label: res.ownerH,
          width: { min: Math.max(90, 56 + res.ownerH.length * 8) },
        },
        {
          name: 'booking.email',
          label: res.emailH,
          width: { min: Math.max(150, 56 + res.emailH.length * 8) },
        },
        {
          name: 'booking.tableId',
          label: res.tableH,
          width: { min: Math.max(80, 56 + res.tableH.length * 8) },
        },
      ];
    });

    this.translate
      .get('cockpit.reservations.dialogTable')
      .subscribe((res: any) => {
        this.columnso = [
          {
            name: 'email',
            label: res.guestEmailH,
            width: { min: Math.max(110, 24 + res.guestEmailH.length * 8) },
          },
          {
            name: 'accepted',
            label: res.acceptanceH,
            width: { min: Math.max(80, 56 + res.acceptanceH.length * 8) },
          },
        ];

        if (this.data.booking.assistants) {
          this.columnst.push({
            name: 'booking.assistants',
            label: res.assistantsH,
            width: {
              min: Math.max(80, 56 + res.assistantsH.length * 8),
            },
          });
        }
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
