import { FavouriteService } from './../../services/favourite.service';
import { Product } from './../product.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ ] //Gets FavouriteService instance from parent...
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;
  @Output() favouriteAdded = new EventEmitter<Product>();

  constructor(private favouriteService: FavouriteService) { }

  ngOnInit() {
  }

  addToFavourites(product: Product): void {
    this.favouriteService.addToFavourites(product);
    this.favouriteAdded.emit(product);
  }
}