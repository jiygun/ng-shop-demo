import { LinkWithIconModule } from './../link-with-icon/link-with-icon.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBottomMenuComponent } from './nav-bottom-menu.component';
import { NavOpenerDirective } from './nav-opener.directive';
import { RowModule } from '../../atoms/row/row.module';
import { ColModule } from '../../atoms/col/col.module';
import { ListModule } from '../../atoms/list/list.module';
import { ListItemModule } from '../../atoms/list-item/list-item.module';
import { LinkModule } from '../../atoms/link/link.module';
import { ImageModule } from '../../atoms/image/image.module';
import { BlockModule } from '../../atoms/block/block.module';



@NgModule({
  declarations: [
    NavBottomMenuComponent,
    NavOpenerDirective
  ],
  providers:[
    NavOpenerDirective
  ],
  imports: [
    CommonModule,
    RowModule,
    ColModule,
    ListModule,
    ListItemModule,
    LinkModule,
    LinkWithIconModule,
    ImageModule,
    BlockModule
  ],
  exports:[
    NavBottomMenuComponent
  ]
})
export class NavBottomMenuModule { }
