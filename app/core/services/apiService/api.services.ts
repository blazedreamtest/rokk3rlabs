import {Component, Injectable }  from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiServices {
    constructor(private _http: Http ) { }

    // getApiData() {
    //     var headers = new Headers();
    //     var url = './api/news-api.json'
    //     return this._http.get(url).map( res => {
    //         res.json();
    //     });
    // }


}