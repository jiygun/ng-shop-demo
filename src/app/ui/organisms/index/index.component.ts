import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'es-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  productList!:ProductModel[];
  constructor(private procutService:ProductService) { }

  ngOnInit(): void {
    this.procutService.getIndexProductList().subscribe((productList:ProductModel[])=>{
      this.productList=productList;
    });
  }

}
