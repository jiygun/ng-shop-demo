import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { RowModule } from '../../atoms/row/row.module';
import { ColModule } from '../../atoms/col/col.module';
import { ProductCardModule } from '../../molecules/product-card/product-card.module';
import { IndexSliderModule } from '../../molecules/index-slider/index-slider.module';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RowModule,
    ColModule,
    ProductCardModule,
    IndexSliderModule
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductListModule { }
