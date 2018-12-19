import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardComponent } from './home-card';
import { CoreModule } from '../../../core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'components/components.module';
import { IonicModule } from 'ionic-angular';

describe('HomeCardComponent', () => {
  let component: HomeCardComponent;
  let fixture: ComponentFixture<HomeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CoreModule,
        TranslateModule.forRoot(),
        IonicModule.forRoot(HomeCardComponent),
        ComponentsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardComponent);
    component = fixture.componentInstance;
    component.tile = {
      titleKey: 'test',
      contentKey: 'test',
      img: 'test',
      buttonLabelKey: 'test',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
