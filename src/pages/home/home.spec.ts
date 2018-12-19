import { async, TestBed } from '@angular/core/testing';

import { CoreModule } from '../../core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { HomePage } from './home';
import { HomePageModule } from './home.module';
import { ComponentsModule } from 'components/components.module';
import { IonicModule, NavController } from 'ionic-angular';

describe('HomePage', () => {
  let component: HomePage;
  let navCtrl: NavController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        CoreModule,
        HomePageModule,
        ComponentsModule,
        IonicModule.forRoot(HomePage),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    component = new HomePage(navCtrl);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
