import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../products/product/product.component';
import { ProdFilterService } from 'src/app/shared/services/prod-filter.service';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-search-res',
  templateUrl: './search-res.component.html',
  styleUrls: ['./search-res.component.css']
})
export class SearchResComponent implements OnInit {

  searchedProd: IProduct[] = [];

  constructor( public prodFilter: ProdFilterService) { }

  ngOnInit() {
    this.searchedProd = this.prodFilter.filteredProd;
  }

}
