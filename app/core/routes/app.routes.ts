import { ModuleWithProviders }  from '@angular/core';
import { CanActivate, Routes, RouterModule } from '@angular/router';

import { NewsComponent } from '../../modules/news/news.component';
import { AnalyticsComponent } from '../../modules/analytics/analytics.component';


const appRoutes: Routes = [
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: '',
    redirectTo: 'analytics',
    pathMatch: 'full',
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  }
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);