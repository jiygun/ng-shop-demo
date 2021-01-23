import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpanComponent } from './span.component';



@NgModule({
  declarations: [
    SpanComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SpanComponent
  ]
})
export class SpanModule { }
