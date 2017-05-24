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
var router_1 = require('@angular/router');
var app_config_1 = require('../../../core/config/app.config');
var HeaderComponent = (function () {
    function HeaderComponent(config, route) {
        this.config = config;
        this.route = route;
        //Main Title
        this.title = this.config.title;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        $(".menu-icon").click(function () {
            if ($(this).hasClass("expand")) {
                $(".navigation-main").slideUp();
                $(".site-header").css("height", "auto");
                setTimeout(function () {
                    $('.menu-icon').removeClass('expand');
                    $('.menu-icon').addClass('collapse');
                }, 100);
            }
            if ($(this).hasClass("collapse")) {
                $(".navigation-main").slideDown();
                $(".site-header").css("height", "100%");
                setTimeout(function () {
                    $('.menu-icon').addClass('expand');
                    $('.menu-icon').removeClass('collapse');
                }, 100);
            }
            return false;
        });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'rokk3rlabs-header',
            templateUrl: 'app/modules/templates/common/header/header.component.html'
        }), 
        __metadata('design:paramtypes', [app_config_1.ApiWebConfig, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map