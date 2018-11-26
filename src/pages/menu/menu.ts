import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DishView } from '../../viewModels/interfaces';
import { Observable } from 'rxjs';
import { MenuProvider } from '../../providers/menu/menu';
import { map } from 'rxjs/operators';
import { FilterFormData } from '../../components/menu/menu-filters/menu-filters';
import { Filter } from '../../backendModels/interfaces';

export interface Filters {
  searchBy: string;
  sortName: string;
  maxPrice: string;
  minLikes: string;
  isFav: string;
  sortDir: string;
}
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  dishes$: Observable<DishView[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuProvider: MenuProvider,
  ) {}

  onFilterChange(filters: FilterFormData): void {
    const composedFilters: Filter = this.menuProvider.composeFilters(filters);
    this.dishes$ = this.menuProvider
      .getDishes(composedFilters)
      .pipe(map((res) => res.result));
  }
}
