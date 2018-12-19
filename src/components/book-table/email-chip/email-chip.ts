import { Component, ComponentRef } from '@angular/core';

@Component({
  selector: 'email-chip',
  templateUrl: 'email-chip.html',
  styles: ['email-chip.scss'],
})
export class EmailChipComponent {
  labelText: string;
  chip: string;
  componentRef: ComponentRef<EmailChipComponent>;

  constructor() {
    this.labelText = '';
    this.componentRef = undefined;
  }

  setLabel(label: string) {
    this.labelText = label;
  }

  setComponentRef(componentRef: ComponentRef<EmailChipComponent>) {
    this.componentRef = componentRef;
  }

  selfDestruct() {
    if (!!this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
