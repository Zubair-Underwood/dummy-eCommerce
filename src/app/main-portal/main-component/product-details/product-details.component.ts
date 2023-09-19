import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public allProducts: any = []

  constructor(
    private readonly productService: ProductService
  ) {

  }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.productService.getAllProduct().subscribe((res: any) => {
      console.log(res);
      this.allProducts = res.result

    })
  }

}
