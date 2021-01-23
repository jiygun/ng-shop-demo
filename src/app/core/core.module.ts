import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SlideService } from './services/slide.service';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    SlideService,
    ProductService,
    CategoryService
  ]
})
export class CoreModule { }
