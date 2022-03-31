import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './container/cart/cart.component';
import { ProductsComponent } from './container/products/products.component';
import { SearchResComponent } from './container/search-res/search-res.component';
import { ProductDetailsComponent } from './container/products/product/product-details/product-details.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'search/:data',
    component: SearchResComponent
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
