import { I_ResponseModel } from './../models/response.model';
import { HttpClient } from '@angular/common/http';
import { Database } from './database';
import { Injectable } from '@angular/core';
import { Http } from './http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category/category.model';
import { I_CategoryModel } from '../models/response.model';

enum CategoryIds{
  mainCategory
}

const tempCategoryModel=new Array(
  {id:1,parentId:0,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:2,parentId:1,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:3,parentId:1,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:4,parentId:1,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:5,parentId:1,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:6,parentId:1,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:7,parentId:1,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:8,parentId:1,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:9,parentId:1,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:10,parentId:1,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:11,parentId:1,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:12,parentId:0,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:13,parentId:12,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:14,parentId:12,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:15,parentId:12,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:16,parentId:12,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:17,parentId:12,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:18,parentId:12,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:19,parentId:12,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:20,parentId:12,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:21,parentId:0,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:22,parentId:21,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:23,parentId:21,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:24,parentId:21,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:25,parentId:21,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:26,parentId:21,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:27,parentId:21,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:28,parentId:21,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:29,parentId:21,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:30,parentId:21,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:31,parentId:21,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:32,parentId:0,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:33,parentId:32,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:34,parentId:32,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:35,parentId:32,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:36,parentId:32,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:37,parentId:32,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:38,parentId:32,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:39,parentId:32,categoryName:"Jiyan",seo_url:"jiyan"},
  {id:40,parentId:32,categoryName:"Jiyan",seo_url:"jiyan"},
);

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _database:Database;
  constructor(private httpClient:HttpClient) {
    this._database=new Http(httpClient);
  }
  getCategoryList():Observable<CategoryModel[]>{
    return new Observable((observe)=>{
      this._database.get<I_ResponseModel<I_CategoryModel>>('https://jsonplaceholder.typicode.com/todos/').subscribe(categoryList=>{
        const resCategoryList:CategoryModel[]=new Array();
        tempCategoryModel.forEach((i_categoryModel:I_CategoryModel,index:number,i_categoryList:I_CategoryModel[])=>{
          if(i_categoryModel.parentId===CategoryIds.mainCategory){
            resCategoryList.push(({...(i_categoryModel as CategoryModel),subCategories:i_categoryList.filter((i_subCategoryModel:I_CategoryModel)=>i_subCategoryModel.parentId===i_categoryModel.id).map((i_subCategoryModel:I_CategoryModel)=>(i_subCategoryModel as CategoryModel))}))
          }
        });
        observe.next(resCategoryList);
        observe.complete();
      },(error)=>{
        observe.error(error);
        observe.complete();
      });
    });
  }
}
