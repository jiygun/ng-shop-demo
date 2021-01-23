import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonWithIconComponent } from './button-with-icon.component';
import { ButtonModule } from '../../atoms/button/button.module';
import { IconModule } from '../../atoms/icon/icon.module';



@NgModule({
  declarations: [
    ButtonWithIconComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    IconModule
  ],
  exports:[
    ButtonWithIconComponent
  ]
})
export class ButtonWithIconModule { }
