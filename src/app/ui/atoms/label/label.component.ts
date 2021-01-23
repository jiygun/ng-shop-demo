import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'es-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {

  @Input() classList!:string;
  @Input() for!:string;

  constructor() { }

}
