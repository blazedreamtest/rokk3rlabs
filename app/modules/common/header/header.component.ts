import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiWebConfig } from '../../../core/config/app.config';


declare var $:any;
@Component({
    selector: 'rokk3rlabs-header',
    templateUrl: 'app/modules/templates/common/header/header.component.html'
})
export class HeaderComponent {
    constructor( private config:ApiWebConfig,
                 private route: Router ) { }

    //Main Title
    title:any = this.config.title;


    ngOnInit() {
        	$(".menu-icon").click(function () {
                if($(this).hasClass("expand")){
                    $(".navigation-main").slideUp();
                    $(".site-header").css("height","auto");
                    setTimeout(function(){
                        $('.menu-icon').removeClass('expand');
                        $('.menu-icon').addClass('collapse');
                    },100);
                }
                if($(this).hasClass("collapse")){
                    $(".navigation-main").slideDown();
                    $(".site-header").css("height","100%");
                    setTimeout(function(){
                        $('.menu-icon').addClass('expand');
                        $('.menu-icon').removeClass('collapse');
                    },100);
                }
                return false;
            });
    }
}