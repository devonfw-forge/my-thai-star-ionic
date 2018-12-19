import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterSortComponent, SortDirection } from './filter-sort';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../../../../core/core.module';
import { ComponentsModule } from 'components/components.module';
import { IonicModule } from 'ionic-angular';

describe('FilterSortComponent', () => {
  let component: FilterSortComponent;
  let fixture: ComponentFixture<FilterSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        CoreModule,
        ComponentsModule,
        IonicModule.forRoot(FilterSortComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSortComponent);
    component = fixture.componentInstance;
    component.sortValue = {
      name: 'test',
      direction: SortDirection.ASC,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
