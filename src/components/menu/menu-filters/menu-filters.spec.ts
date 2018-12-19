import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../../../core/core.module';
import { MenuFiltersComponent } from './menu-filters';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'components/components.module';
import { IonicModule } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MenuFiltersComponent', () => {
  let component: MenuFiltersComponent;
  let fixture: ComponentFixture<MenuFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        CoreModule,
        ComponentsModule,
        IonicModule.forRoot(MenuFiltersComponent),
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
