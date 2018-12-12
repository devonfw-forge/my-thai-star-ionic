import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SortControlModel {
  name: string;
  direction: SortDirection;
}
export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}
enum SortIcon {
  ASC = 'arrow-round-up',
  DESC = 'arrow-round-down',
}

@Component({
  selector: 'filter-sort',
  templateUrl: './filter-sort.html',
  styles: ['./filter-sort.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterSortComponent),
      multi: true,
    },
  ],
})
export class FilterSortComponent implements ControlValueAccessor {
  sortValue: SortControlModel;
  updateForm: Function;
  disabled: boolean;

  sortDirIcon: SortIcon = SortIcon.DESC;

  // ControlValueAccessor

  writeValue(val: SortControlModel): void {
    this.sortValue = val;
  }
  registerOnChange(fn: any): void {
    this.updateForm = fn;
  }

  registerOnTouched(fn: any): void {
    // Not implemented;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Binding Methods

  onSelectChange(selectedValue: string): void {
    this.sortValue = { ...this.sortValue, ...{ name: selectedValue } };
    this.updateForm(this.sortValue);
  }
  changeSortDir(event: Event): void {
    event.preventDefault();
    this.sortDirIcon =
      this.sortDirIcon === SortIcon.ASC ? SortIcon.DESC : SortIcon.ASC;
    const newDir: SortDirection =
      this.sortValue.direction === SortDirection.ASC
        ? SortDirection.DESC
        : SortDirection.ASC;
    this.sortValue = { ...this.sortValue, ...{ direction: newDir } };
    this.updateForm(this.sortValue);
  }
}
