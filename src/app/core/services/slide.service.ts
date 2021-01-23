import { I_ResponseModel, I_SlideModel } from './../models/response.model';
import { HttpClient } from '@angular/common/http';
import { Database } from './database';
import { Injectable } from '@angular/core';
import { Http } from './http';
import { Observable } from 'rxjs';
import { SlideModel } from '../models/slider/slider.model';


const tempSlideList=new Array({id:1,slideImage:"https://via.placeholder.com/1200x380",bannerImage:"https://via.placeholder.com/60x45",seo_url:"jiyan"},
{id:1,slideImage:"https://via.placeholder.com/1200x380",bannerImage:"https://via.placeholder.com/60x45",seo_url:"jiyan"},
{id:1,slideImage:"https://via.placeholder.com/1200x380",bannerImage:"https://via.placeholder.com/60x45",seo_url:"jiyan"},
{id:1,slideImage:"https://via.placeholder.com/1200x380",bannerImage:"https://via.placeholder.com/60x45",seo_url:"jiyan"},
{id:1,slideImage:"https://via.placeholder.com/1200x380",bannerImage:"https://via.placeholder.com/60x45",seo_url:"jiyan"},
{id:1,slideImage:"https://via.placeholder.com/1200x380",bannerImage:"https://via.placeholder.com/60x45",seo_url:"jiyan"},
{id:1,slideImage:"https://via.placeholder.com/1200x380",bannerImage:"https://via.placeholder.com/60x45",seo_url:"jiyan"}
);

@Injectable({
  providedIn: 'root'
})
export class SlideService {
  private _database:Database;
  constructor(private httpClient:HttpClient) { 
    this._database=new Http(httpClient);
  }
  getSlideList():Observable<SlideModel[]>{
    return new Observable((observe)=>{
      this._database.get('https://jsonplaceholder.typicode.com/todos/').subscribe((slideList:I_ResponseModel<I_SlideModel>)=>{
        observe.next(tempSlideList.map((slide:I_SlideModel)=>(slide as SlideModel)));
        observe.complete();
      },(error)=>{
        observe.error(error);
        observe.complete();
      });
    });
  }
}
