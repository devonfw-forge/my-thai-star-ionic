import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCheckboxesComponent } from './filter-checkboxes';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../../../../core/core.module';
import { ComponentsModule } from 'components/components.module';
import { IonicModule } from 'ionic-angular';

describe('FilterCheckboxesComponent', () => {
  let component: FilterCheckboxesComponent;
  let fixture: ComponentFixture<FilterCheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CoreModule,
        TranslateModule.forRoot(),
        ComponentsModule,
        IonicModule.forRoot(FilterCheckboxesComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCheckboxesComponent);
    component = fixture.componentInstance;
    component.categoriesValue = {
      mainDishes: true,
      starters: true,
      desserts: true,
      noodle: true,
      rice: true,
      curry: true,
      vegan: true,
      vegetarian: true,
      favourites: true,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
