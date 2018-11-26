import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdersPage } from './orders';
import { CoreModule } from '../../core/core.module';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [OrdersPage],
  imports: [
    IonicPageModule.forChild(OrdersPage),
    CoreModule,
    TranslateModule,
    ComponentsModule,
    HttpClientModule,
    CommonModule,
  ],
})
export class OrdersPageModule {}
