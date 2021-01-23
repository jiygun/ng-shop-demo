import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'es-link-with-icon',
  templateUrl: './link-with-icon.component.html',
  styleUrls: ['./link-with-icon.component.scss']
})
export class LinkWithIconComponent implements OnInit {

  @Input() classList!:string;
  @Input() iconClassList!:string;
  @Input() faIcon!:IconDefinition;
  @Input() isIconLeft!:boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
