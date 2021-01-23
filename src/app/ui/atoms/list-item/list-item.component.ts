import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'es-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.OnPush,
  host:{'class':'list-group-item'}
})
export class ListItemComponent implements OnChanges {

  @Input() classList!:string;

  constructor(private elementRef:ElementRef,private render:Renderer2) { }
  ngOnChanges(): void {
    if(this.classList) this.classList.split(" ").map((className:string)=>this.render.addClass(this.elementRef.nativeElement,className));
  }
}
