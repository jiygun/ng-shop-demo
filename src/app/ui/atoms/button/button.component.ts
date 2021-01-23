import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'es-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {

  @Input() type!:string;

  @Input() classList!:string;

  constructor() { }

}
