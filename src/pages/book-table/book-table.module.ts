import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { CoreModule } from '../../core/core.module';
import { BookTablePage } from './book-table';
import { BookTablePopoverComponent } from '../../components/book-table/book-table-popover/book-table-popover';
import { InvitationPopoverComponent } from '../../components/book-table/invitation-popover/invitation-popover';
import { EmailChipComponent } from '../../components/book-table/email-chip/email-chip';

@NgModule({
  declarations: [BookTablePage],
  imports: [
    IonicPageModule.forChild(BookTablePage),
    ComponentsModule,
    CoreModule,
    TranslateModule,
  ],
  entryComponents: [
    InvitationPopoverComponent,
    BookTablePopoverComponent,
    EmailChipComponent,
  ],
})
export class BookTablePageModule {}
