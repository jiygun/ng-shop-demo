import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../../organisms/navbar/navbar.module';
import { FooterModule } from '../../organisms/footer/footer.module';



@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    FooterModule
  ]
})
export class RootModule { }
