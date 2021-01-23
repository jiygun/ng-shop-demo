import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTopMenuComponent } from './nav-top-menu.component';
import { ListModule } from '../../atoms/list/list.module';
import { ListItemModule } from '../../atoms/list-item/list-item.module';
import { LinkModule } from '../../atoms/link/link.module';



@NgModule({
  declarations: [
    NavTopMenuComponent
  ],
  imports: [
    CommonModule,
    ListModule,
    ListItemModule,
    LinkModule
  ],
  exports:[
    NavTopMenuComponent
  ]
})
export class NavTopMenuModule { }
