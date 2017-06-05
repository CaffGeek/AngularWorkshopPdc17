import { Observable } from 'rxjs/Observable';
import { FavouriteService } from './../../services/favourite.service';
import { ProductService } from './../../services/product.service';
import { Product } from './../product.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ ProductService, FavouriteService ]
})
export class ProductListComponent implements OnInit {

  title: string = "Products";
  products: Product[];
  products$: Observable<Product[]>; //Naming Observables with $ as a suffix is a convention
  selectedProduct: Product;
  message: string;
  pageSize: number = 5;
  start: number = 0;

  constructor(
    private productService: ProductService,
    private favouriteService: FavouriteService) {
  }

  ngOnInit() {
    // this.productService.getProducts()
    //   .subscribe(data => this.products = data);
    this.products$ = this.productService.getProducts();
  }

  onSelect(product:Product):void {
    this.selectedProduct = product;
  }

  get favourites():number{
    return this.favouriteService.getFavouritesCount();
  }

  newFavourite(product:Product):void{
    this.message = `Product ${product.name} added to your favourites!`;
  }

  prevPage():void {
    this.start -= this.pageSize;
  }

  nextPage():void {
    this.start += this.pageSize;
  }
}