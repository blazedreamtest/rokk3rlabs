"use strict";
var router_1 = require('@angular/router');
var news_component_1 = require('../../modules/news/news.component');
var analytics_component_1 = require('../../modules/analytics/analytics.component');
var appRoutes = [
    {
        path: 'news',
        component: news_component_1.NewsComponent
    },
    {
        path: '',
        redirectTo: 'analytics',
        pathMatch: 'full',
    },
    {
        path: 'analytics',
        component: analytics_component_1.AnalyticsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map