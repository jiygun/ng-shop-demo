import { Component, OnChanges, Input, ElementRef, Renderer2, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'es-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush,
  host:{'class':'card'}
})
export class CardComponent implements OnChanges {

  @Input() classList!:string;

  constructor(private elementRef:ElementRef<HTMLElement>,private render:Renderer2) { }

  ngOnChanges(): void {
    if(this.classList) this.classList.split(" ").map((className:string)=>this.render.addClass(this.elementRef.nativeElement,className));
  }

}
