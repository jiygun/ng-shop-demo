import { Component, Input, OnChanges, ElementRef, Renderer2, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'es-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss'],
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush,
  host:{'class':'card-body'}
})
export class CardBodyComponent implements OnChanges {

  @Input() classList!:string;

  constructor(private elementRef:ElementRef<HTMLElement>,private render:Renderer2) { }

  ngOnChanges(): void {
    if(this.classList) this.classList.split(" ").map((className:string)=>this.render.addClass(this.elementRef.nativeElement,className));
  }

}
