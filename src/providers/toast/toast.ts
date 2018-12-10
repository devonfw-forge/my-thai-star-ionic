import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastProvider {
  public toastConfig: { duration: number; cssClass: string; message: string };
  constructor(public toastController: ToastController) {}

  openToast(message: string, duration: number, color: string): void {
    this.toastConfig = {
      message: message,
      duration: duration,
      cssClass: 'toast-' + color,
    };

    this.toastController
      .create({
        ...{ showCloseButton: true, closeButtonText: 'OK' },
        ...this.toastConfig,
      })
      .present();
  }
}
