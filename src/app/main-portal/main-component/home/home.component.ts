import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // public allProduct: any =[];
  // public URL  = 'http://localhost:8686/'

  // constructor(
  //   private readonly productService: ProductService
  // ) {


  // }

  // ngOnInit(): void {
  //   this.getAllProduct()
  // }

  // getAllProduct() {
  //   this.productService.getAllProduct().subscribe((res: any) => {
  //     console.log(res.Result);

  //     this.allProduct = res.Result
  //     console.log(this.allProduct.productName);


  //   })

  // }

  public allProduct: any = [];
  public URL = 'http://localhost:8686/'

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router,
  ) {

  }

  ngOnInit(): void {
    this.getAllProduct()
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe((res: any) => {
      console.log(res.Result);

      this.allProduct = res.Result
      console.log(this.allProduct.productName);

    })
  }

  redirecToViewProduct(id:any) {
    console.log(id)
    this.router.navigate(['product-details',id])
  }
}
