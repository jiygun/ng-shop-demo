import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'es-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush,
  host:{'class':'row'}
})
export class RowComponent implements OnChanges {
  
  @Input() classList!:string;

  constructor(private elementRef:ElementRef,private render:Renderer2) { }
  ngOnChanges(): void {
    if(this.classList) this.classList.split(" ").map((className:string)=>this.render.addClass(this.elementRef.nativeElement,className));
  }
}
