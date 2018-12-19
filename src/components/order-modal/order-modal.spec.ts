import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule } from '../../core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { OrderModalComponent } from './order-modal';
import { PriceCalculatorProvider } from 'providers/price-calculator/price-calculator';
import { OrderProvider } from 'providers/order/order';
import { ToastProvider } from 'providers/toast/toast';
import { ComponentsModule } from 'components/components.module';
import { IonicModule, ViewController } from 'ionic-angular';

class ViewControllerMock {
  public readReady: any = {
    emit(): void {},
    subscribe(): any {},
  };

  public writeReady: any = {
    emit(): void {},
    subscribe(): any {},
  };

  public contentRef(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public didEnter(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public didLeave(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public onDidDismiss(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public onWillDismiss(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public willEnter(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public willLeave(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public willUnload(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public dismiss(): any {
    return true;
  }

  public enableBack(): any {
    return true;
  }

  public getContent(): any {
    return true;
  }

  public hasNavbar(): any {
    return true;
  }

  public index(): any {
    return true;
  }

  public isFirst(): any {
    return true;
  }

  public isLast(): any {
    return true;
  }

  public pageRef(): any {
    return true;
  }

  public setBackButtonText(): any {
    return true;
  }

  public showBackButton(): any {
    return true;
  }

  public _setHeader(): any {
    return true;
  }

  public _setIONContent(): any {
    return true;
  }

  public _setIONContentRef(): any {
    return true;
  }

  public _setNavbar(): any {
    return true;
  }

  public _setContent(): any {
    return true;
  }

  public _setContentRef(): any {
    return true;
  }

  public _setFooter(): any {
    return true;
  }
}

describe('OrderModalComponent', () => {
  let component: OrderModalComponent;
  let fixture: ComponentFixture<OrderModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        PriceCalculatorProvider,
        OrderProvider,
        ToastProvider,
        {
          provide: ViewController,
          useClass: ViewControllerMock,
        },
      ],
      imports: [
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        CoreModule,
        ComponentsModule,
        IonicModule.forRoot(OrderModalComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
