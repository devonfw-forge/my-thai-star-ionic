import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservationsPage } from './reservations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../../core/core.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [ReservationsPage],
  imports: [
    IonicPageModule.forChild(ReservationsPage),
    CommonModule,
    HttpClientModule,
    TranslateModule,
    CoreModule,
    ComponentsModule,
  ],
})
export class ReservationsPageModule {}
