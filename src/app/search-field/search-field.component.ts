import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements ICellRendererAngularComp {
  public myControl = new FormControl();
  options: string[] = [
    'Polo',
    'Golf',
    'ID.3',
    'ID.4',
    'ID.5',
    'Golf Variant',
    'T-Roc',
    'T-Cross',
    'Up!',
    'Passat',
    'Arteon',
    'Tiguan',
    'Polo Cabriolet',
    'Golf Variant',
    'ID.3 Sport',
    'ID.4 Sport',
    'ID.5 Sport',
    'Golf Variant GTI',
    'T-Roc R',
    'T-Cross R',
    'Up!',
    'Passat Sportline',
    'Caddy',
    'Touareg',
  ];
  filteredOptions: Observable<string[]>;

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  selectedValue!: string;
  private params!: ICellRendererParams;

  private _filter(value: string): string[] {
    this.cellValue = value;
    this.selectedValue = value;
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  public cellValue!: string;

  refresh(params: ICellRendererParams): boolean {
    // this.cellValue = this.getValueToDisplay(params);
    this.cellValue = this.selectedValue;
    this.params = params;
    return true;
  }

  agInit(params: ICellRendererParams): void {
    //
    this.params = params;
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }
}
