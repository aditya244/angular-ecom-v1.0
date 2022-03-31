import { Component, OnInit, Input } from '@angular/core';
import { JsoncallService } from '../../shared/services/jsoncall.service';
import { IProduct } from '../../shared/interfaces/product';
import { count, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productData: IProduct[] = [];
  totalProducts: Number;
  currentPageNumber: Number = 1;

  constructor(public jsoncallService: JsoncallService,
    public router: Router
      ) { }

  ngOnInit() {
    this.jsoncallService.getFilters
    .pipe(
      switchMap(() => this.jsoncallService.getProducts())
    )
    .subscribe((product) => {
      this.productData = product;
      this.totalProducts = this.productData.length;
      //console.log(this.productData, 'prod data')
    })
  }

  onClickProduct(productId) {
    //console.log('method called')
    this.router.navigate(['/products', productId]);
    //console.log(productId, 'product-id');
  }

}
