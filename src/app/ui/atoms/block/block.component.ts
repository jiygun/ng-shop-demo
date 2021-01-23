import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'es-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class BlockComponent {

  constructor() { }
}
