import { Component, Input, OnInit } from '@angular/core';
import { OrderProvider } from '../../../providers/order/order';
import { PopoverController, AlertController } from 'ionic-angular';
import { PriceCalculatorProvider } from '../../../providers/price-calculator/price-calculator';
import { OrderView } from '../../../viewModels/interfaces';
import { CommentPopoverComponent } from './comment-popover/comment-popover';
import { map } from 'lodash';

@Component({
  selector: 'order',
  templateUrl: 'order.html',
})
export class OrderComponent implements OnInit {
  extras: string;
  @Input('order') order: OrderView;

  constructor(
    private orderProvider: OrderProvider,
    private popoverController: PopoverController,
    private calculator: PriceCalculatorProvider,
    private alertCtrl: AlertController,
  ) {}

  ngOnInit(): void {
    this.extras = map(this.order.extras, 'name').join(', ');
  }

  removeComment(): void {
    this.order.orderLine.comment = undefined;
  }

  addComment(): void {
    let popover = this.popoverController.create(CommentPopoverComponent,{},{cssClass:'popover80'});
    popover.onDidDismiss((result: string) => {
      if (!!result) this.order.orderLine.comment = result;
    });
    popover.present();
  }

  increaseOrder(): void {
    this.orderProvider.increaseOrder(this.order);
  }

  decreaseOrder(): void {
    this.orderProvider.decreaseOrder(this.order);
  }

  removeOrder(): void {
    this.orderProvider.removeOrder(this.order);
  }

  calculateOrderPrice(): number {
    return this.calculator.getPrice(this.order);
  }

  openCommentDialog(): void {
    this.alertCtrl
      .create({
        message: this.order.orderLine.comment,
        title: 'Comment',
        buttons: ['Close'],
      })
      .present();
  }
}
