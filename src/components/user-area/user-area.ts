import { Component } from '@angular/core';

/**
 * Generated class for the UserAreaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-area',
  templateUrl: 'user-area.html'
})
export class UserAreaComponent {

  text: string;

  constructor() {
    console.log('Hello UserAreaComponent Component');
    this.text = 'Hello World';
  }

}
