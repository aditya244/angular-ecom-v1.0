import { Injectable } from '@angular/core';
import { IProduct } from '../../shared/interfaces/product';
import { JsoncallService } from './jsoncall.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProdFilterService {

  constructor(public jsonService: JsoncallService, public router: Router) { }

  filteredProd: IProduct[] = [];

  searchProducts(data) {
    this.jsonService.getProductData().subscribe( apiData => {
      // console.log(apiData, 'Api Data from Prod-fileter Service');
      for (let i = 0; i < apiData.length; i++) {
        if (apiData[i].category === data || apiData[i].name === data) {
          this.filteredProd.push(apiData[i]);
        }
      }
      console.log(this.filteredProd, 'category array');
    });
    this.router.navigate(['/search/:data']);
  }
}
