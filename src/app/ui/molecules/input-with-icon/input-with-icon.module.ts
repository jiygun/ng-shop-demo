import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithIconComponent } from './input-with-icon.component';
import { InputModule } from '../../atoms/input/input.module';
import { IconModule } from '../../atoms/icon/icon.module';



@NgModule({
  declarations: [
    InputWithIconComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    IconModule,
  ],
  exports:[
    InputWithIconComponent
  ]
})
export class InputWithIconModule { }
