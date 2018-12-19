import { Component, Input } from '@angular/core';
import { DishView, ExtraView } from '../../../viewModels/interfaces';
import { MenuProvider } from '../../../providers/menu/menu';
import { AuthProvider } from '../../../providers/auth/auth';
import { OrderProvider } from '../../../providers/order/order';
import { ModalController } from 'ionic-angular';
import { OrderModalComponent } from '../../order-modal/order-modal';

@Component({
  selector: 'menu-card',
  templateUrl: 'menu-card.html',
})
export class MenuCardComponent {
  @Input() menuInfo: DishView;

  constructor(
    private menuProvider: MenuProvider,
    public auth: AuthProvider,
    private orderProvider: OrderProvider,
    private modalCtrl: ModalController,
  ) {}

  addOrderMenu(): void {
    this.orderProvider.addOrder(this.menuProvider.menuToOrder(this.menuInfo));
    this.modalCtrl.create(OrderModalComponent).present();
    this.menuProvider.clearSelectedExtras(this.menuInfo);
  }

  changeFavouriteState(): void {
    this.menuInfo.isfav = !this.menuInfo.isfav;
  }

  selectedOption(extra: ExtraView): void {
    extra.selected = !extra.selected;
  }
}
