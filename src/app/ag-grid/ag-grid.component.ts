import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap, finalize } from 'rxjs';
import dataSetColumnsLarge from './dataset-columns-large';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
})
export class AgGridComponent implements OnInit {
  columnDefs: ColDef[] = dataSetColumnsLarge;

  rowData$: Observable<any[]>;

  serverAWS = 'http://18.193.129.166/';

  serverGitHub = 'https://davialves1.github.io/mock-server/';

  serverOpenShift =
    'https://mock-server-git-davi-alves-00-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/';

  localServer = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
    this.rowData$ = http.get<{ dataset: any[] }>(this.serverAWS).pipe(
      map((data) => data.dataset),
      tap((data) => console.log(data))
    );
  }

  ngOnInit(): void {
    this.http
      .get(`http://18.193.129.166/test`)
      .subscribe((message) => console.log(message));
  }
}
