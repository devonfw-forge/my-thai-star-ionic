import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DishView } from '../../viewModels/interfaces';
import { Observable } from 'rxjs';
import { MenuProvider } from '../../providers/menu/menu';
import { map } from 'rxjs/operators';
import { FilterFormData } from '../../components/menu/menu-filters/menu-filters';
import { Filter, Pageable } from '../../backendModels/interfaces';

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
    public menuProvider: MenuProvider,
  ) {}

  onFilterChange(filters: FilterFormData): void {
    const pageable: Pageable = {
      pageSize: 8,
      pageNumber: 0,
      sort: [
        {
          property: filters.sort.property,
          direction: filters.sort.direction,
        },
      ],
    };
    const composedFilters: Filter = this.menuProvider.composeFilters(
      pageable,
      filters,
    );
    this.dishes$ = this.menuProvider.getDishes(composedFilters).pipe(
      map((res) => {
        if (!res) {
          return [];
        } else {
          return res.content;
        }
      }),
    );
  }
}
