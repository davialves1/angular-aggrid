import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-droplist',
  templateUrl: './droplist.component.html',
  styleUrls: ['./droplist.component.scss']
})
export class DroplistComponent implements OnInit, ICellRendererAngularComp {

  private params!: ICellRendererParams;

  constructor() {
    //
  }

  refresh(): boolean {
    return false;
    }
    agInit(params: ICellRendererParams): void {
      this.params = params;
    }

  ngOnInit(): void {
    //
  }

}
