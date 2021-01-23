import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './atoms/button/button.module';
import { ImageModule } from './atoms/image/image.module';
import { IconModule } from './atoms/icon/icon.module';
import { InputModule } from './atoms/input/input.module';
import { LabelModule } from './atoms/label/label.module';
import { LinkModule } from './atoms/link/link.module';
import { InputWithIconModule } from './molecules/input-with-icon/input-with-icon.module';
import { ButtonWithIconModule } from './molecules/button-with-icon/button-icon.module';
import { LinkWithIconModule } from './molecules/link-with-icon/link-with-icon.module';
import { SearchInputModule } from './organisms/search-input/search-input.module';
import { NavbarModule } from './organisms/navbar/navbar.module';
import { ContainerModule } from './atoms/container/container.module';
import { NavBottomMenuModule } from './molecules/nav-bottom-menu/nav-bottom-menu.module';
import { RowModule } from './atoms/row/row.module';
import { ColModule } from './atoms/col/col.module';
import { SpanModule } from './atoms/span/span.module';
import { CardModule } from './atoms/card/card.module';
import { CardBodyModule } from './atoms/card-body/card-body.module';
import { CardFooterModule } from './atoms/card-footer/card-footer.module';
import { CardHeaderModule } from './atoms/card-header/card-header.module';
import { BlockModule } from './atoms/block/block.module';
import { ProductCardModule } from './molecules/product-card/product-card.module';
import { FooterModule } from './organisms/footer/footer.module';
import { IndexModule } from './organisms/index/index.module';
import { ParagraphModule } from './atoms/paragraph/paragraph.module';
import { ProductListModule } from './organisms/product-list/product-list.module';
import { RootModule } from './pages/root/root.module';
import { HomeModule } from './pages/home/home.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ButtonModule,
    ImageModule,
    IconModule,
    InputModule,
    LabelModule,
    LinkModule,
    InputWithIconModule,
    ButtonWithIconModule,
    LinkWithIconModule,
    SearchInputModule,
    NavbarModule,
    ContainerModule,
    NavBottomMenuModule,
    RowModule,
    ColModule,
    SpanModule,
    CardModule,
    CardBodyModule,
    CardFooterModule,
    CardHeaderModule,
    BlockModule,
    ProductCardModule,
    FooterModule,
    IndexModule,
    ParagraphModule,
    ProductListModule,
    RootModule,
    HomeModule
  ],
  exports:[
    ButtonModule,
    ImageModule,
    IconModule,
    InputModule,
    LabelModule,
    LinkModule,
    InputWithIconModule,
    ButtonWithIconModule,
    LinkWithIconModule,
    SearchInputModule,
    NavbarModule,
    ContainerModule,
    NavBottomMenuModule,
    RowModule,
    ColModule,
    SpanModule,
    CardModule,
    CardBodyModule,
    CardFooterModule,
    CardHeaderModule,
    BlockModule,
    ProductCardModule,
    FooterModule,
    IndexModule,
    ParagraphModule,
    ProductListModule
  ]
})
export class UiModule { }
