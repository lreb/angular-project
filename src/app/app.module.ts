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
import { PageDetailComponent } from './common/component/report/child/page-detail/page-detail.component';
import { PageDetail2Component } from './common/component/report/child/page-detail-2/page-detail-2.component';
import { DetailsComponent } from './common/component/report/details/details.component';

const appRoutes: Routes = [
  { path: 'Report', component: GeneralReportComponent },
  {
    path: 'ReportDetail', component: DetailReportComponent, data: { title: 'Detail' },
    children: [
      //{ path: '', redirectTo: 'PageDetail1', pathMatch: 'full' },
      { path: 'view/:id', component: PageDetailComponent },
      { path: 'edit/:id', component: PageDetail2Component }
    ]
  }, 
  { path: 'ReportDetail/see/:order', component: DetailsComponent },
  { path: 'ReportDetail/scan/:order', component: DetailsComponent },
  { path: '', redirectTo: 'Report', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GeneralReportComponent,
    DetailReportComponent,
    PageNotFoundComponent,
    PageDetailComponent,
    PageDetail2Component,
    DetailsComponent
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
