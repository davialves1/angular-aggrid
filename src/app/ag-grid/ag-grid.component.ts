import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';
import dataSetColumnsLarge from './dataset-columns-large';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
})
export class AgGridComponent {
  columnDefs: ColDef[] = dataSetColumnsLarge;

  rowData$: Observable<any[]>;

  serverAWS = 'https://main.d2ic2s1siwuz32.amplifyapp.com/';

  serverGitHub = 'https://davialves1.github.io/mock-server/';

  serverOpenShift =
    'https://mock-server-git-davi-alves-00-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/';

  localServer = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
    this.rowData$ = http.get<{ dataset: any[] }>(this.serverOpenShift).pipe(
      map((data) => data.dataset),
      tap((data) => console.log(data))
    );
  }
}
