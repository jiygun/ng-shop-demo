import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { ContainerModule } from '../../atoms/container/container.module';
import { RowModule } from '../../atoms/row/row.module';
import { ColModule } from '../../atoms/col/col.module';
import { SpanModule } from '../../atoms/span/span.module';
import { TitleModule } from '../../atoms/title/title.module';
import { ListModule } from '../../atoms/list/list.module';
import { ListItemModule } from '../../atoms/list-item/list-item.module';
import { LinkModule } from '../../atoms/link/link.module';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    ContainerModule,
    RowModule,
    ColModule,
    SpanModule,
    TitleModule,
    ListModule,
    ListItemModule,
    LinkModule
  ],
  exports:[
    FooterComponent
  ]
})
export class FooterModule { }
