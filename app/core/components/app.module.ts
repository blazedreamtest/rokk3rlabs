import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MasonryModule } from 'angular2-masonry';
import { ChartModule } from 'angular2-highcharts';
/* Components */
import { HeaderComponent } from '../../modules/common/header/header.component';
import { DashboardSettingComponent } from '../../modules/common/dashboard-setting/dashboardsetting.component';
import { NewsComponent } from '../../modules/news/news.component';
import { AnalyticsComponent } from '../../modules/analytics/analytics.component';


/* Services */
//import { ApiServices } from '../../core/services/apiService/api.services';

/* Routing */
import { routing } from '../routes/app.routes';

/* Config */
import { ApiWebConfig } from '../../core/config/app.config';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports:      [ BrowserModule,routing,ChartsModule,MasonryModule,ChartModule.forRoot(require('highcharts')) ],
  declarations: [ AppComponent, HeaderComponent, DashboardSettingComponent, NewsComponent, AnalyticsComponent ],
  providers:    [ ApiWebConfig ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  
}
