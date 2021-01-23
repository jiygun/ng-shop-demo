import { I_ProductModel, I_ResponseModel } from './../models/response.model';
import { HttpClient } from '@angular/common/http';
import { Database } from './database';
import { Injectable } from '@angular/core';
import { Http } from './http';
import { Observable } from 'rxjs';
import { ProductModel } from './../models/product/product.model';


const tempProductList=new Array({id:1,productName:"Jiyan",productCode:"JG",productPrice:5648.12,productImages:["../../../assets/image/product-1.webp","../../../assets/image/product-2.webp","../../../assets/image/product-3.webp","../../../assets/image/product-4.webp","../../../assets/image/product-5.webp"],seo_url:"jiyan"},
{id:1,productName:"Jiyan",productCode:"JG",productPrice:5648.12,productImages:["../../../assets/image/product-1.webp","../../../assets/image/product-2.webp"],seo_url:"jiyan"},
{id:1,productName:"Jiyan",productCode:"JG",productPrice:5648.12,productImages:["../../../assets/image/product-1.webp","../../../assets/image/product-2.webp","../../../assets/image/product-3.webp","../../../assets/image/product-4.webp"],seo_url:"jiyan"},
{id:1,productName:"Jiyan",productCode:"JG",productPrice:5648.12,productImages:["../../../assets/image/product-1.webp","../../../assets/image/product-2.webp","../../../assets/image/product-3.webp"],seo_url:"jiyan"},
{id:1,productName:"Jiyan",productCode:"JG",productPrice:5648.12,productImages:["../../../assets/image/product-1.webp","../../../assets/image/product-2.webp","../../../assets/image/product-3.webp","../../../assets/image/product-4.webp","../../../assets/image/product-5.webp"],seo_url:"jiyan"},
{id:1,productName:"Jiyan",productCode:"JG",productPrice:5648.12,productImages:["../../../assets/image/product-1.webp","../../../assets/image/product-2.webp"],seo_url:"jiyan"},
{id:1,productName:"Jiyan",productCode:"JG",productPrice:5648.12,productImages:["../../../assets/image/product-1.webp","../../../assets/image/product-2.webp","../../../assets/image/product-3.webp","../../../assets/image/product-4.webp"],seo_url:"jiyan"},
{id:1,productName:"Jiyan",productCode:"JG",productPrice:5648.12,productImages:["../../../assets/image/product-1.webp","../../../assets/image/product-2.webp","../../../assets/image/product-3.webp"],seo_url:"jiyan"});

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _database:Database;
  constructor(private httpClient:HttpClient) { 
    this._database=new Http(httpClient);
  }
  getIndexProductList():Observable<ProductModel[]>{
    return new Observable((observe)=>{
      this._database.get('https://jsonplaceholder.typicode.com/todos/').subscribe((productList:I_ResponseModel<I_ProductModel>)=>{
        observe.next(tempProductList.map((product:I_ProductModel)=>(product as ProductModel)));
        observe.complete();
      },(error)=>{
        observe.error(error);
        observe.complete();
      });
    });
  }
}
