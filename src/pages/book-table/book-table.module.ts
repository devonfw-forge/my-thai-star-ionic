import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { CoreModule } from '../../core/core.module';
import { BookTablePage } from './book-table';

@NgModule({
  declarations: [BookTablePage],
  imports: [
    IonicPageModule.forChild(BookTablePage),
    ComponentsModule,
    CoreModule,
    TranslateModule,
  ],
})
export class BookTablePageModule {}
