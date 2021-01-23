import { Component, OnInit } from '@angular/core';
import { SlideModel } from 'src/app/core/models/slider/slider.model';
import { SlideService } from 'src/app/core/services/slide.service';

@Component({
  selector: 'es-index-slider',
  templateUrl: './index-slider.component.html',
  styleUrls: ['./index-slider.component.scss']
})
export class IndexSliderComponent implements OnInit {

  slideList!:SlideModel[];
  bannerList!:SlideModel[];

  constructor(private slideService:SlideService) { }

  ngOnInit(): void {
    this.slideService.getSlideList().subscribe((slideList:SlideModel[])=>{
      this.slideList=[...slideList.slice(0,1),...slideList,...slideList.splice(slideList.length-1,slideList.length)];
      this.bannerList=slideList;
    });
  }

}
