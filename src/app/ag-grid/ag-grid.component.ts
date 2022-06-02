import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import dataSetColumnsLarge from './dataset-columns-large';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
})
export class AgGridComponent {
  columnDefs: ColDef[] = dataSetColumnsLarge;

  rowData$: Observable<any[]>;

  serverAWS = 'http://18.193.129.166/';

  localServer = 'http://localhost:8080/dataset/';

  constructor(private http: HttpClient) {
    this.rowData$ = http
      .get<{ dataset: any[] }>(this.localServer)
      .pipe(map((data) => data.dataset));
  }
}
