import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule } from '../../../../core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { MenuCardDetailsComponent } from './menu-card-details';
import { ComponentsModule } from 'components/components.module';
import { IonicModule } from 'ionic-angular';

describe('MenuCardDetailsComponent', () => {
  let component: MenuCardDetailsComponent;
  let fixture: ComponentFixture<MenuCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CoreModule,
        TranslateModule.forRoot(),
        ComponentsModule,
        IonicModule.forRoot(MenuCardDetailsComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCardDetailsComponent);
    component = fixture.componentInstance;
    component.menuInfo = {
      dish: { id: 0, name: 'test', description: 'test', price: 0 },
      image: { content: '' },
      extras: [],
      likes: 0,
      isfav: true,
      categories: [{ id: 'test' }],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
