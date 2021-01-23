import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexSliderComponent } from './index-slider.component';
import { SliderAngularModule } from 'slider-angular';



@NgModule({
  declarations: [
    IndexSliderComponent
  ],
  imports: [
    CommonModule,
    SliderAngularModule
  ],
  exports:[
    IndexSliderComponent
  ]
})
export class IndexSliderModule { }
