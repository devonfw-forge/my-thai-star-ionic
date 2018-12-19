import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSearchComponent } from './filter-search';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../../../../core/core.module';
import { ComponentsModule } from 'components/components.module';
import { IonicModule } from 'ionic-angular';

describe('FilterSearchComponent', () => {
  let component: FilterSearchComponent;
  let fixture: ComponentFixture<FilterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CoreModule,
        TranslateModule.forRoot(),
        ComponentsModule,
        IonicModule.forRoot(FilterSearchComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
