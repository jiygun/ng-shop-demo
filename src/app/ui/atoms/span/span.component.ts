import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'es-span',
  templateUrl: './span.component.html',
  styleUrls: ['./span.component.scss'],
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class SpanComponent {

  @Input() classList!:string;

  constructor() { }

}
