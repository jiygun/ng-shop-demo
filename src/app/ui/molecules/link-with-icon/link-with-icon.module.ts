import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkWithIconComponent } from './link-with-icon.component';
import { LinkModule } from '../../atoms/link/link.module';
import { IconModule } from '../../atoms/icon/icon.module';



@NgModule({
  declarations: [
    LinkWithIconComponent
  ],
  imports: [
    CommonModule,
    LinkModule,
    IconModule
  ],
  exports:[
    LinkWithIconComponent
  ]
})
export class LinkWithIconModule { }
