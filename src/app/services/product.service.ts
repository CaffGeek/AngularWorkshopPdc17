import { Product } from './../products/product.interface';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {
    private apiProductEndpoint = "http://storerestservice.azurewebsites.net/api/products/";
    constructor(private http: Http) { }

    getProducts():Observable<Product[]> {
        return this.http.get(this.apiProductEndpoint)
            .map(results => results.json());
    }
}