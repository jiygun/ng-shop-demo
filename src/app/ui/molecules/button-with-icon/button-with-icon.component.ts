import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'es-button-with-icon',
  templateUrl: './button-with-icon.component.html',
  styleUrls: ['./button-with-icon.component.scss']
})
export class ButtonWithIconComponent{

  @Input() classList!:string;
  @Input() faIcon!:IconDefinition;
  @Input() isIconLeft!:boolean;


  constructor() { }
}
