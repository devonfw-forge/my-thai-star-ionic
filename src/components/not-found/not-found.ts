import { Component } from '@angular/core';

/**
 * Generated class for the NotFoundComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'not-found',
  templateUrl: 'not-found.html'
})
export class NotFoundComponent {

  text: string;

  constructor() {
    console.log('Hello NotFoundComponent Component');
    this.text = 'Hello World';
  }

}
