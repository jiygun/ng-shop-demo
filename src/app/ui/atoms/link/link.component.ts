import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'es-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {

  @Input() classList!:string;
  @Input() href!:string;
  @Input() target!:string;

  constructor() { }

}
