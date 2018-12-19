import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../../core/core.module';

import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from 'app/app.component';
import { ComponentsModule } from 'components/components.module';
import { AppModule } from 'app/app.module';
import { EmailChipComponent } from './email-chip';

describe('EmailChipComponent', () => {
  let component: EmailChipComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        IonicModule.forRoot(EmailChipComponent),
        TranslateModule.forRoot(),
        ComponentsModule,
        CoreModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    component = new EmailChipComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
