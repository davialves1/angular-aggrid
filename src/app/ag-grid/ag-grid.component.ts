import { Component } from '@angular/core';
import dataSetColumns, { DataSetColumns } from './dataset-columns';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
})
export class AgGridComponent {
  columnDefs: ColDef[] = dataSetColumns;

  rowData$: Observable<DataSetColumns[]>;

  constructor(private http: HttpClient) {
    this.rowData$ = http
      .get<{ dataset: DataSetColumns[] }>('http://localhost:8080/')
      .pipe(map((data) => data.dataset));
  }
}
