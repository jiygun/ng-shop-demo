import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, Renderer2, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'es-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush,
  host:{'class':"d-flex container-fluid container-xl"}
})
export class ContainerComponent implements OnChanges {

  @Input() classList!:string;

  constructor(private elementRef:ElementRef,private render:Renderer2) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.classList) this.classList.split(" ").map((className:string)=>this.render.addClass(this.elementRef.nativeElement,className));
  }
}
