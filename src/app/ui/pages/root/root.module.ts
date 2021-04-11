import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { NavbarModule } from '../../organisms/navbar/navbar.module';
import { FooterModule } from '../../organisms/footer/footer.module';
import { RootRoutingModule } from "./root-routing.module";


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
    NavbarModule,
    FooterModule
  ]
})
export class RootModule { }
