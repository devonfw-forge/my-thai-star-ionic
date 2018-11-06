import { Component } from '@angular/core';
import { Tile } from '../../components/home/home-card/home-card';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'public-home',
  templateUrl: './home.html',
  styles: ['./home.scss'],
})
export class HomePage {
  tiles: HomePageTiles = {
    restaurant: {
      titleKey: 'home.restaurantTitle',
      contentKey: 'home.restaurantContent',
      img: './assets/images/thai-restaurant.jpg',
      buttonLabelKey: 'buttons.bookTable',
      navigate: () => this.navigateTo('BookTablePage'),
    },
    menu: {
      titleKey: 'home.menuTitle',
      contentKey: 'home.menuContent',
      img: './assets/images/thai-restaurant-dish.jpg',
      buttonLabelKey: 'buttons.viewMenu',
      navigate: () => this.navigateTo('MenuPage'),
    },
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  navigateTo(page: string): void {
    this.navCtrl.push(page);
  }

  getTiles(): TileWithNavigation[] {
    return Object.keys(this.tiles).map((key) => this.tiles[key]);
  }
}

interface TileWithNavigation extends Tile {
  navigate: () => void;
}
interface HomePageTiles {
  restaurant: TileWithNavigation;
  menu: TileWithNavigation;
}
