import { IonicPage, Checkbox, PopoverController } from 'ionic-angular';
import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookTablePopoverComponent } from '../../components/book-table/book-table-popover/book-table-popover';
import { InvitationPopoverComponent } from '../../components/book-table/invitation-popover/invitation-popover';
import { WindowProvider } from '../../providers/window/window';
import { ToastProvider } from '../../providers/toast/toast';
import { emailValidator } from '../../directives/email-validator/email-validator';
import { last } from 'lodash';
import { BookingInfo } from '../../backendModels/interfaces';
import { AbstractControl } from '@angular/forms/src/model';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { EmailChipComponent } from '../../components/book-table/email-chip/email-chip';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-book-table',
  templateUrl: 'book-table.html',
  styles: ['./book-table.scss'],
  animations: [
    trigger('itemState', [
      state('in', style({ transform: 'translateY(0)' })),
      //Enter
      transition('void => *', [
        style({
          transform: 'translateY(-100%)',
        }),
        animate('300ms linear'),
      ]),
    ]),
  ],
})
export class BookTablePage implements OnInit {
  @ViewChild('emailChipContainer', { read: ViewContainerRef })
  emailChipContainer: ViewContainerRef;
  invitationModel: string[] = [];
  minDate: Date = new Date();
  bookForm: FormGroup;
  invitationForm: FormGroup;
  emailChipfactory: ComponentFactory<EmailChipComponent>;
  tab: string;

  reservationInfo: BookingInfo = {
    booking: {
      name: '',
      email: '',
      bookingDate: undefined,
      bookingType: 0,
    },
    invitedGuests: undefined,
  };

  resDate: string;
  invDate: string;
  resDateTouched: boolean;
  invDateTouched: boolean;

  constructor(
    public window: WindowProvider,
    public translate: TranslateService,
    public toastprovider: ToastProvider,
    public popoverCtrl: PopoverController,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    this.tab = 'book';
    this.emailChipfactory = this.componentFactoryResolver.resolveComponentFactory(
      EmailChipComponent,
    );
  }

  ngOnInit(): void {
    this.resDateTouched = false;
    this.invDateTouched = false;

    this.invitationForm = new FormGroup({
      bookingDate: new FormControl(
        this.reservationInfo.booking.bookingDate,
        Validators.required,
      ),
      name: new FormControl(
        this.reservationInfo.booking.name,
        Validators.required,
      ),
      email: new FormControl(this.reservationInfo.booking.email, [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        ),
      ]),
      invitedGuests: new FormControl(this.invitationModel),
    });

    this.bookForm = new FormGroup({
      bookingDate: new FormControl(
        this.reservationInfo.booking.bookingDate,
        Validators.required,
      ),
      name: new FormControl(
        this.reservationInfo.booking.name,
        Validators.required,
      ),
      email: new FormControl(this.reservationInfo.booking.email, [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        ),
      ]),
      assistants: new FormControl(this.reservationInfo.booking.assistants, [
        Validators.required,
        Validators.min(1),
        Validators.max(8),
      ]),
    });

    this.getFirstDayWeek();
  }

  get name(): AbstractControl {
    return this.bookForm.get('name');
  }
  get email(): AbstractControl {
    return this.bookForm.get('email');
  }
  get assistants(): AbstractControl {
    return this.bookForm.get('assistants');
  }

  get invName(): AbstractControl {
    return this.invitationForm.get('name');
  }
  get invEmail(): AbstractControl {
    return this.invitationForm.get('email');
  }

  showBookTablePopover(checkbox: Checkbox): void {
    let bookTablePopover = this.popoverCtrl.create(
      BookTablePopoverComponent,
      {
        data: this.bookForm.value,
      },
      { cssClass: this.window.responsiveWidth() },
    );
    bookTablePopover.onDidDismiss((res: boolean) => {
      if (res) {
        this.bookForm.reset();
        checkbox.checked = false;
      }
    });
    bookTablePopover.present();
  }

  showInvitePopover(checkbox: Checkbox): void {
    let invitationPopover = this.popoverCtrl.create(
      InvitationPopoverComponent,
      {
        data: this.invitationForm.value,
      },
      { cssClass: this.window.responsiveWidth() },
    );
    invitationPopover.onDidDismiss((res: boolean) => {
      if (res) {
        this.invitationForm.reset();
        this.invitationModel = [];
        checkbox.checked = false;
      }
    });
    invitationPopover.present();
  }

  validateEmail(): void {
    let email = last(this.invitationModel);
    if (!emailValidator(email)) {
      this.invitationModel.pop();
      this.translate
        .get('bookTable.formErrors.emailFormat')
        .subscribe((text: string) => {
          this.toastprovider.openToast(text, 1000, 'red');
        });
    } else {
      let componentRef = this.emailChipContainer.createComponent(
        this.emailChipfactory,
      );
      componentRef.instance.setLabel(email);
      componentRef.instance.setComponentRef(componentRef);
      componentRef.onDestroy(() =>
        this.invitationModel.forEach(
          (value: string, index: number, array: string[]) => {
            if (value === componentRef.instance.labelText) array.splice(index);
          },
        ),
      );
    }
  }

  addEmail(email: string): void {
    if (this.invitationModel.indexOf(email) > -1) {
      return null;
    }
    this.invitationModel.push(email);
    this.validateEmail();
    this.invitationForm.get('invitedGuests').setValue(this.invitationModel);
  }

  getFirstDayWeek(): string {
    moment.locale(this.translate.currentLang);
    const firstDay: string = moment(moment().weekday(0)).format('d');
    return firstDay;
  }

  setDate(form: string, value: any): void {
    if (form === 'inv') {
      this.invDate = this.invitationForm
        .get('bookingDate')
        .value.format('L LT');
    }
    if (form === 'res') {
      this.resDate = this.bookForm.get('bookingDate').value.format('L LT');
    }
  }

  changeDate(form: string, value: string): void {
    let newDate = moment(value);
    if (form === 'inv') {
      newDate.locale(this.invitationForm.get('bookingDate').value.locale());
      this.invitationForm.get('bookingDate').setValue(newDate);
    }
    if (form === 'res') {
      newDate.locale(this.bookForm.get('bookingDate').value.locale());
      this.bookForm.get('bookingDate').setValue(newDate);
    }
  }

  isDate(value: string): boolean {
    return moment(value, 'L LT', true).isValid();
  }
}
