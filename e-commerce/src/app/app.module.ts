import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './container/products/products.component';
import { JsoncallService } from './shared/services/jsoncall.service';
import { CartService } from './shared/services/cart.service';
import { CartComponent } from './container/cart/cart.component';
import { SidebarComponent } from './container/sidebar/sidebar.component';
import { ProductComponent } from './container/products/product/product.component';
import { HeaderComponent } from './container/header/header.component';
import { FooterComponent } from './container/footer/footer.component';
import { SearchResComponent } from './container/search-res/search-res.component';
import { ProductDetailsComponent } from './container/products/product/product-details/product-details.component';
import { DecimalPipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    ProductsComponent,
    CartComponent,
    SidebarComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    SearchResComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [JsoncallService, CartService, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
