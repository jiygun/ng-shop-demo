import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { LocationSlideDirective } from './location-slide.directive';
import { CardModule } from '../../atoms/card/card.module';
import { CardHeaderModule } from '../../atoms/card-header/card-header.module';
import { CardBodyModule } from '../../atoms/card-body/card-body.module';
import { CardFooterModule } from '../../atoms/card-footer/card-footer.module';
import { LinkModule } from '../../atoms/link/link.module';
import { ListModule } from '../../atoms/list/list.module';
import { ListItemModule } from '../../atoms/list-item/list-item.module';
import { ImageModule } from '../../atoms/image/image.module';
import { SpanModule } from '../../atoms/span/span.module';
import { ParagraphModule } from '../../atoms/paragraph/paragraph.module';
import { ButtonModule } from '../../atoms/button/button.module';



@NgModule({
  declarations: [
    ProductCardComponent,
    LocationSlideDirective
  ],
  imports: [
    CommonModule,
    CardModule,
    CardHeaderModule,
    CardBodyModule,
    CardFooterModule,
    LinkModule,
    ListModule,
    ListItemModule,
    ImageModule,
    SpanModule,
    ParagraphModule,
    ButtonModule
  ],
  exports:[
    ProductCardComponent
  ]
})
export class ProductCardModule { }
