import { CoreModule } from '../../core/core.module';
import { TestBed, inject } from '@angular/core/testing';
import { ToastProvider } from './toast';
import { IonicModule } from 'ionic-angular';
import { MyApp } from 'app/app.component';

describe('ToastProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, IonicModule.forRoot(ToastProvider)],
      providers: [ToastProvider],
    });
  });

  it('should create', inject([ToastProvider], (service: ToastProvider) => {
    expect(service).toBeTruthy();
  }));
});
