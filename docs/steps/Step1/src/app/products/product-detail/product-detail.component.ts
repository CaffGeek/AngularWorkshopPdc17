import { Product } from './../product.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  @Output() favouriteAdded = new EventEmitter<Product>();

  constructor(
  ) { }

  addToFavourites(product: Product) {
    this.favouriteAdded.emit(product);
  }

  ngOnInit() {
  }
}
