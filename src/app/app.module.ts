import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { authenticateReducer } from './store/reducer';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { DockingComponent } from './docking/docking.component';
import { DockingLayoutModule } from 'smart-webcomponents-angular/dockinglayout';
import { TabsModule } from 'smart-webcomponents-angular/tabs';
import { TextBoxModule } from 'smart-webcomponents-angular/textbox';
import { SliderModule } from 'smart-webcomponents-angular/slider';
import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    AgGridComponent,
    DockingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DockingLayoutModule,
    TabsModule,
    FormsModule,
    TextBoxModule,
    SliderModule,
    MultilineTextBoxModule,
    StoreModule.forRoot({ authentication: authenticateReducer }),
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
