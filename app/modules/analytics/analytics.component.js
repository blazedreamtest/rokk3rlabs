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
var AnalyticsComponent = (function () {
    function AnalyticsComponent() {
        this.graphStat = [
            { "zoneId": "Calle 85", "data": { "count": 1, "speed": 10, "time": 1466781876681 } },
            { "zoneId": "Salitre plaza", "data": { "count": 2, "speed": 8.5, "time": 1466781876681 } },
            { "zoneId": "Parque 93", "data": { "count": 4, "speed": 15, "time": 1466781876681 } },
            { "zoneId": "Calle 80", "data": { "count": 3, "speed": 13.5, "time": 1466781876681 } },
            { "zoneId": "Centro", "data": { "count": 1, "speed": 9, "time": 1466781876681 } }
        ];
        //Bar Charts
        this.ChartLabels = ['Calle 85', 'Salitre plaza', 'Parque 93', 'Calle 80', 'Centro'];
        this.ChartData = [10, 8.5, 15, 13.5, 9];
        this.ChartType = 'doughnut';
        this.ChartOptions = {
            legend: { position: 'bottom' }
        };
        this.PathsbarChartOptions = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 10,
                        },
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                    }],
                xAxes: [{
                        ticks: {
                            fontSize: 10,
                            maxRotation: 0,
                        },
                        barThickness: 30,
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                    }],
            },
            responsive: true,
            legend: { display: false }
        };
        this.PathsbarChartColors = [
            {
                backgroundColor: [
                    'rgba(139, 185, 248, 1)',
                    'rgba(139, 185, 248, 1)',
                    'rgba(139, 185, 248, 1)',
                    'rgba(139, 185, 248, 1)',
                    'rgba(139, 185, 248, 1)'
                ],
                borderWidth: 0
            }
        ];
        this.barChartLabels = ['1', '2', '3', '4', '5'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [10, 8.5, 15, 13.5, 9], label: 'Zones' },
        ];
        //Line Charts
        this.lineChartLabels = ['1', '2', '3', '4', '5'];
        this.lineChartType = 'line';
        this.lineChartLegend = true;
        this.lineChartData = [
            { data: [49, 10, 152, 56, 10], label: 'Calle 85' },
            { data: [82, 89.5, 25, 76, 50], label: 'Salitre plaza' },
            { data: [64, 129, 31, 16, 19], label: 'Parque 93' },
            { data: [12, 10.5, 96, 96, 29], label: 'Calle 80' },
            { data: [40, 90, 78, 16, 19], label: 'Centro' },
        ];
    }
    //Line Charts
    AnalyticsComponent.prototype.getlineGraphOption = function () {
        this.graphOption = {
            chart: {
                renderTo: 'lineChart'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                series: {
                    pointStart: 2010
                }
            },
            series: [{
                    name: 'Calle 85',
                    data: [49, 10, 152, 56, 10]
                }, {
                    name: 'Salitre plaza',
                    data: [82, 89.5, 25, 76, 50]
                }, {
                    name: 'Parque 93',
                    data: [64, 129, 31, 16, 19]
                }, {
                    name: 'Calle 80',
                    data: [12, 10.5, 96, 96, 29]
                }, {
                    name: 'Centro',
                    data: [40, 90, 78, 16, 19]
                }]
        };
    };
    AnalyticsComponent.prototype.ngOnInit = function () {
        this.getlineGraphOption();
    };
    AnalyticsComponent = __decorate([
        core_1.Component({
            selector: 'rokk3rlabs-analytics',
            templateUrl: 'app/modules/templates/analytics/analytics.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());
exports.AnalyticsComponent = AnalyticsComponent;
//# sourceMappingURL=analytics.component.js.map