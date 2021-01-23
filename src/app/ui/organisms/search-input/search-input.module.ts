import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LabelModule } from './../../atoms/label/label.module';
import { InputWithIconModule } from '../../molecules/input-with-icon/input-with-icon.module';



@NgModule({
  declarations: [
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    InputWithIconModule,
    LabelModule
  ],
  exports:[
    SearchInputComponent
  ]
})
export class SearchInputModule { }
