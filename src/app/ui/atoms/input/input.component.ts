import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'es-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class InputComponent {

  @Input() classList!:string;

  constructor() { }

}
