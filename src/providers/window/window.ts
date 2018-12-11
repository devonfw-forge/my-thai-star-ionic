import { Injectable } from '@angular/core';

function getWindow(): Window {
  return window;
}

@Injectable()
export class WindowProvider {
  get nativeWindow(): Window {
    return getWindow();
  }

  responsiveWidth(): string {
    return getWindow().innerWidth > 800 ? 'popover40' : 'popover80';
  }
}
