import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'es-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {

  @Input() src!:string;
  @Input() alt!:string;

  constructor() { }

}
