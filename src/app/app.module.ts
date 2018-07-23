import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/layout/header/header.component';
import { GeneralReportComponent } from './common/component/report/general-report/general-report.component';
import { DetailReportComponent } from './common/component/report/detail-report/detail-report.component';

import { PageNotFoundComponent } from './common/messages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'Report', component: GeneralReportComponent },
  { path: 'ReportDetail', component: DetailReportComponent, data: { title: 'Detail' } },
  { path: '', redirectTo: '/Report', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GeneralReportComponent,
    DetailReportComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
