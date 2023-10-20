import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  productList: Iproduct[] = [];
  constructor(private productsService: ProductService) {
    this.productsService.getAllProducts().subscribe (data => {
      this.productList = data;
    })
  }

}
