import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCardCommentsComponent } from './menu-card-comments';
import { CoreModule } from '../../../../core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'components/components.module';
import { IonicModule } from 'ionic-angular';

describe('MenuCardCommentsComponent', () => {
  let component: MenuCardCommentsComponent;
  let fixture: ComponentFixture<MenuCardCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CoreModule,
        TranslateModule.forRoot(),
        ComponentsModule,
        IonicModule.forRoot(MenuCardCommentsComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCardCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
