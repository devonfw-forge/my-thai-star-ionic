import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DishView, ExtraView } from '../../../../viewModels/interfaces';

@Component({
  selector: 'menu-card-details',
  templateUrl: 'menu-card-details.html',
})
export class MenuCardDetailsComponent {
  @Input()
  menuInfo: DishView;

  @Output() clickOrder: EventEmitter<DishView> = new EventEmitter<DishView>();

  onSelectExtra(extra: ExtraView): void {
    // extra.selected = !extra.selected;
    const modifiedExtraIndex: number = this.menuInfo.extras.indexOf(extra);
    const oldExtra: ExtraView = this.menuInfo.extras[modifiedExtraIndex];
    this.menuInfo.extras[modifiedExtraIndex] = {
      ...oldExtra,
      ...{ selected: !oldExtra.selected },
    };
  }

  onClickOrder(): void {
    this.clickOrder.emit(this.menuInfo);
  }
}
