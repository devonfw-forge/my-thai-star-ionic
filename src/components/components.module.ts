import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { HomeCardComponent } from './home/home-card/home-card';
import { HomeLayoutComponent } from './home/home-layout/home-layout';
import { MenuFiltersComponent } from './menu/menu-filters/menu-filters';
import { FilterSortComponent } from './menu/menu-filters/filter-sort/filter-sort';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { BookTablePopoverComponent } from './book-table/book-table-popover/book-table-popover';
import { InvitationPopoverComponent } from './book-table/invitation-popover/invitation-popover';
import { EmailChipComponent } from './book-table/email-chip/email-chip';
import { CoreModule } from '../core/core.module';
import { LoginPopoverComponent } from './header/login-popover/login-popover';
import { AccountPopoverComponent } from './header/account-popover/account-popover';
import { TwitterAccountPopoverComponent } from './header/twitter-account-popover/twitter-account-popover';
import { ChangePasswordPopoverComponent } from './header/change-password-popover/change-password-popover';
import { CommentPopoverComponent } from './order-modal/order/comment-popover/comment-popover';
import { OrderModalComponent } from './order-modal/order-modal';
import { OrderComponent } from './order-modal/order/order';
import { MenuCardComponent } from './menu/menu-card/menu-card';
import { FilterCheckboxesComponent } from './menu/menu-filters/filter-checkboxes/filter-checkboxes';
import { FilterSearchComponent } from './menu/menu-filters/filter-search/filter-search';
import { MenuCardCommentsComponent } from './menu/menu-card/menu-card-comments/menu-card-comments';
import { MenuCardDetailsComponent } from './menu/menu-card/menu-card-details/menu-card-details';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersPopoverComponent } from './cockpit-area/orders-popover/orders-popover';
import { ReservationsPopoverComponent } from './cockpit-area/reservations-popover/reservations-popover';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeCardComponent,
    HomeLayoutComponent,
    MenuFiltersComponent,
    FilterSortComponent,
    BookTablePopoverComponent,
    InvitationPopoverComponent,
    EmailChipComponent,
    LoginPopoverComponent,
    AccountPopoverComponent,
    TwitterAccountPopoverComponent,
    ChangePasswordPopoverComponent,
    CommentPopoverComponent,
    OrderModalComponent,
    OrderComponent,
    MenuCardComponent,
    MenuFiltersComponent,
    FilterCheckboxesComponent,
    FilterSearchComponent,
    MenuCardCommentsComponent,
    MenuCardDetailsComponent,
    OrdersPopoverComponent,
    ReservationsPopoverComponent,
  ],
  imports: [
    IonicModule,
    TranslateModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    HomeCardComponent,
    HomeLayoutComponent,
    MenuFiltersComponent,
    FilterSortComponent,
    CommonModule,
    TranslateModule,
    BookTablePopoverComponent,
    InvitationPopoverComponent,
    EmailChipComponent,
    LoginPopoverComponent,
    AccountPopoverComponent,
    TwitterAccountPopoverComponent,
    ChangePasswordPopoverComponent,
    CommentPopoverComponent,
    OrderModalComponent,
    OrderComponent,
    MenuCardComponent,
    MenuFiltersComponent,
    FilterCheckboxesComponent,
    FilterSearchComponent,
    MenuCardCommentsComponent,
    MenuCardDetailsComponent,
    OrdersPopoverComponent,
    ReservationsPopoverComponent,
  ],
  entryComponents: [
    LoginPopoverComponent,
    AccountPopoverComponent,
    ChangePasswordPopoverComponent,
    TwitterAccountPopoverComponent,
    OrderModalComponent,
    CommentPopoverComponent,
    OrdersPopoverComponent,
    ReservationsPopoverComponent,
    BookTablePopoverComponent,
    InvitationPopoverComponent,
  ],
})
export class ComponentsModule {}
