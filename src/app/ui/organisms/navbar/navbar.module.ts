import { ImageModule } from './../../atoms/image/image.module';
import { CardFooterModule } from './../../atoms/card-footer/card-footer.module';
import { CardHeaderModule } from './../../atoms/card-header/card-header.module';
import { CardBodyModule } from './../../atoms/card-body/card-body.module';
import { CardModule } from './../../atoms/card/card.module';
import { SpanModule } from './../../atoms/span/span.module';
import { LinkModule } from './../../atoms/link/link.module';
import { ListItemModule } from './../../atoms/list-item/list-item.module';
import { ListModule } from './../../atoms/list/list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { SearchInputModule } from '../search-input/search-input.module';
import { NavTopMenuModule } from '../../molecules/nav-top-menu/nav-top-menu.module';
import { ContainerModule } from '../../atoms/container/container.module';
import { NavBottomMenuModule } from '../../molecules/nav-bottom-menu/nav-bottom-menu.module';
import { RowModule } from '../../atoms/row/row.module';
import { ColModule } from '../../atoms/col/col.module';
import { LinkWithIconModule } from '../../molecules/link-with-icon/link-with-icon.module';
import { LogoModule } from '../../molecules/logo/logo.module';
import { BlockModule } from '../../atoms/block/block.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavTopMenuModule,
    NavBottomMenuModule,
    ContainerModule,
    RowModule,
    ColModule,
    SearchInputModule,
    LinkWithIconModule,
    ListModule,
    ListItemModule,
    LinkModule,
    SpanModule,
    LogoModule,
    CardModule,
    CardBodyModule,
    CardHeaderModule,
    CardFooterModule,
    ImageModule,
    BlockModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
