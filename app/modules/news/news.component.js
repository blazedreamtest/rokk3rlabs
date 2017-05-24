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
var app_config_1 = require('../../core/config/app.config');
var NewsComponent = (function () {
    function NewsComponent(config) {
        this.config = config;
        this.layoutOption = {
            transitionDuration: '0.8s',
            gutter: 20,
        };
        this.newsDetail = [
            {
                "category": "Chain Store Age",
                "created": "Feb 22, 2016",
                "title": "Billabong taps NetSuite to power omnichannel strategy",
                "newsImg": "app/assets/images/news.png",
                "newsDescription": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
                "likes": "132",
                "watched": false
            },
            {
                "category": "Bussiness Wire",
                "created": "Feb 18, 2016",
                "title": "New Study Shows One Critical Industry Lagging Behind in Software Security",
                "newsImg": "",
                "newsDescription": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong ",
                "likes": "132",
                "watched": false
            },
            {
                "category": "Bussiness Wire",
                "created": "Feb 13, 2016",
                "title": "AlphaGo and the Declining Advantage of Big Companies",
                "newsImg": "app/assets/images/news.png",
                "newsDescription": "Panelists at CII's spring conference discuss governance implications of shift in US firms’ approach to capital allocation When it comes to uses of cash, investors are slightly schizophrenic about...",
                "likes": "132",
                "watched": false
            },
            {
                "category": "Chain Store Age",
                "created": "Feb 13, 2016",
                "title": "Journelle, Alton Lane streamline process with NetSuite platform",
                "newsImg": "app/assets/images/news.png",
                "newsDescription": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong Internatio",
                "likes": "132",
                "watched": true
            },
            {
                "category": "Internet Retailer",
                "created": "Feb 14, 2016",
                "title": "NetSuite rolls out a new e-procurement system for B2B companies",
                "newsImg": "app/assets/images/news.png",
                "newsDescription": "Katherine BoccaccioNetSuite Inc. announced that two fashion and apparel retailers — Journelle, a seller of high-end lingerie and loungewear, and Alton Lane, a maker of men’s custom-tailored...",
                "likes": "123",
                "watched": false
            },
            {
                "category": "The Wall Street Journal",
                "created": "Feb 13, 2016",
                "title": "NetSuite to Buy Email Marketing Company for $200 Million",
                "newsImg": "app/assets/images/news.png",
                "newsDescription": "It's been 25 years since Professor Jeffrey Sonnenfeld's landmark book The Hero's Farewell vividly documented the challenges and failures of CEO succession planning at large publicly traded...",
                "likes": "122",
                "watched": false
            }
        ];
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        core_1.Component({
            selector: 'rokk3rlabs-news',
            templateUrl: 'app/modules/templates/news/news.component.html'
        }), 
        __metadata('design:paramtypes', [app_config_1.ApiWebConfig])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=news.component.js.map