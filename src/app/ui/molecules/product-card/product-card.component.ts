import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product/product.model';

@Component({
  selector: 'es-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnChanges,AfterViewInit {

  @Input() productModel!:ProductModel;
  locationSlideReady!:string;
  
  @ViewChildren('productImageList') productImageList!: QueryList<any>;

  constructor(private changeDetectorRef:ChangeDetectorRef) { }
  ngAfterViewInit(): void {
    this.locationSlideReady="true";
    this.changeDetectorRef.detectChanges();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.productModel) {};
  }

}
