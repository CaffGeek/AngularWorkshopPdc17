import { Product } from './../products/product.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class FavouriteService {

    constructor() { }

    private favourites: Set<Product> = new Set<Product>();

    addToFavourites(product:Product):void {
        this.favourites.add(product);
    }

    getFavouritesCount():number {
        return this.favourites.size;
    }
}