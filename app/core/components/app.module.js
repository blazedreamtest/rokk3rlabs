"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var angular2_masonry_1 = require('angular2-masonry');
var angular2_highcharts_1 = require('angular2-highcharts');
/* Components */
var header_component_1 = require('../../modules/common/header/header.component');
var dashboardsetting_component_1 = require('../../modules/common/dashboard-setting/dashboardsetting.component');
var news_component_1 = require('../../modules/news/news.component');
var analytics_component_1 = require('../../modules/analytics/analytics.component');
/* Services */
//import { ApiServices } from '../../core/services/apiService/api.services';
/* Routing */
var app_routes_1 = require('../routes/app.routes');
/* Config */
var app_config_1 = require('../../core/config/app.config');
var ng2_charts_1 = require('ng2-charts');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routes_1.routing, ng2_charts_1.ChartsModule, angular2_masonry_1.MasonryModule, angular2_highcharts_1.ChartModule.forRoot(require('highcharts'))],
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, dashboardsetting_component_1.DashboardSettingComponent, news_component_1.NewsComponent, analytics_component_1.AnalyticsComponent],
            providers: [app_config_1.ApiWebConfig],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map