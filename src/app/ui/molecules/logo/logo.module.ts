import { IconModule } from './../../atoms/icon/icon.module';
import { LinkModule } from '../../atoms/link/link.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitleModule } from '../../atoms/title/title.module';



@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    CommonModule,
    LinkModule,
    IconModule,
    TitleModule,
    FontAwesomeModule
  ],
  exports:[
    LogoComponent
  ]
})
export class LogoModule { }
