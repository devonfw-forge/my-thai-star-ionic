import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { CoreModule } from '../../core/core.module';
import { MenuPage } from './menu';

@NgModule({
  declarations: [MenuPage],
  imports: [
    IonicPageModule.forChild(MenuPage),
    CoreModule,
    TranslateModule,
    ComponentsModule,
  ],
})
export class MenuPageModule {}
