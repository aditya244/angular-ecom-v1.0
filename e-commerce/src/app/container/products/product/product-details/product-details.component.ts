import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { JsoncallService } from '../../../../shared/services/jsoncall.service';
import { IProduct } from '../../../../shared/interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private dataArr;
  private indexOfItem;

  selectedItem: IProduct;
  array: any = []
  number = 1;
;
  constructor(private router: ActivatedRoute, private jsonService: JsoncallService) { }

  ngOnInit() {
    this.getSelectedItem();
  }

  getSelectedItem() {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.indexOfItem = params.get('productId');
    })

     this.jsonService.getProductData().subscribe(data=> {
       this.array = data
        data.forEach(el => {
          if (el.id == this.indexOfItem) {
            console.log('in', el.id, this.indexOfItem)
            this.selectedItem = el
          }
        })
        //console.log(this.selectedItem)
      });

      console.log(this.array, 'prod')

    }
}
