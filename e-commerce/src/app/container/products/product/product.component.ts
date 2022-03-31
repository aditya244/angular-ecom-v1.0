import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public cartService: CartService,
              public prodsService: ProductsService,
              public activatedRoute: ActivatedRoute,
              public router: Router) { }
  @Input() productTitle: string;
  @Input() productPrice: number;
  @Input() productCategory: string;
  @Input() productId: number;
  @Input() productImgUrl: string;

  ngOnInit(): void {
    console.log(this.productTitle, 'Product Title')
  }

  onClickProduct(productId) {
    console.log('method called')
    this.router.navigate(['/products', productId]);
    console.log(productId, 'product-id');
  }
}
