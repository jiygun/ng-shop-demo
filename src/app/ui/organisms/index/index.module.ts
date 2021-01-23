import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { ProductListModule } from '../product-list/product-list.module';
import { ContainerModule } from '../../atoms/container/container.module';
import { RowModule } from '../../atoms/row/row.module';
import { ColModule } from '../../atoms/col/col.module';
import { IndexSliderModule } from '../../molecules/index-slider/index-slider.module';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    ContainerModule,
    RowModule,
    ColModule,
    IndexSliderModule,
    ProductListModule
  ],
  exports:[
    IndexComponent
  ]
})
export class IndexModule { }
