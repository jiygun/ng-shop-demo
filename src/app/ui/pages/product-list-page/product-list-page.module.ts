import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListPageComponent } from './product-list-page.component';
import { RouterModule } from '@angular/router';
import { ProductListPageRoutingModule } from './product-list-page-routing.module';



@NgModule({
  declarations: [ProductListPageComponent],
  imports: [
    CommonModule,
    ProductListPageRoutingModule,
    RouterModule
  ]
})
export class ProductListPageModule { }
