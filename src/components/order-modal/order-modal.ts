import { Component, OnInit } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { OrderView } from '../../viewModels/interfaces';
import { OrderProvider } from '../../providers/order/order';
import { ToastProvider } from '../../providers/toast/toast';
import { PriceCalculatorProvider } from '../../providers/price-calculator/price-calculator';

@Component({
  selector: 'order-modal',
  templateUrl: 'order-modal.html',
})
export class OrderModalComponent implements OnInit {
  orders: OrderView[];

  constructor(
    private viewCtrl: ViewController,
    private orderProvider: OrderProvider,
    private toastProvider: ToastProvider,
    private calculator: PriceCalculatorProvider,
    private navCtrl: NavController,
  ) {}

  ngOnInit(): void {
    this.orders = this.orderProvider.getOrderData();
  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }

  navigateTo(route: string): void {
    this.navCtrl.setRoot(route);
  }

  calculateTotal(): number {
    return this.calculator.getTotalPrice(this.orders);
  }

  sendOrders(bookingId: string): void {
    this.orderProvider.sendOrders(bookingId).subscribe(
      () => {
        this.orders = this.orderProvider.removeAllOrders();
        this.toastProvider.openToast('Order correctly noted', 4000, 'green');
      },
      (error: any) => {
        this.toastProvider.openToast(
          'Error sending order, please, try again later',
          4000,
          'red',
        );
      },
    );
  }
}
