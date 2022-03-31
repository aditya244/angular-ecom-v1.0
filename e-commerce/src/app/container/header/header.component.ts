import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { JsoncallService } from 'src/app/shared/services/jsoncall.service';
import { ProdFilterService } from 'src/app/shared/services/prod-filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchItem: string;

  constructor(public cartService: CartService, public prodFilter: ProdFilterService) { }

  ngOnInit() {
  }

}
