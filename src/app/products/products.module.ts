import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    exports: [
        ProductListComponent
    ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent
    ],
    providers: [],
})
export class ProductsModule { }
