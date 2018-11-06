import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { UserAreaComponent } from './user-area/user-area';
import { HomeCardComponent } from './home/home-card/home-card';
import { HomeLayoutComponent } from './home/home-layout/home-layout';
import { MenuFiltersComponent } from './menu-filters/menu-filters';
import { FilterSortComponent } from './menu-filters/filter-sort/filter-sort';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    UserAreaComponent,
    HomeCardComponent,
    HomeLayoutComponent,
    MenuFiltersComponent,
    FilterSortComponent,
    FilterSortComponent,
  ],
  imports: [IonicModule, TranslateModule],
  exports: [
    HeaderComponent,
    UserAreaComponent,
    HomeCardComponent,
    HomeLayoutComponent,
    MenuFiltersComponent,
    FilterSortComponent,
    FilterSortComponent,
    CommonModule,
    TranslateModule,
  ],
})
export class ComponentsModule {}
