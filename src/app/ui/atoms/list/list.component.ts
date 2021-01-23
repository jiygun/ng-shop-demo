import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'es-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.OnPush,
  host:{'class':'list-group'}
})
export class ListComponent implements OnChanges {

  @Input() classList!:string;

  constructor(private elementRef:ElementRef<HTMLElement>,private render:Renderer2) { }
  ngOnChanges(): void {
    if(this.classList) this.classList.split(" ").map((className:string)=>this.render.addClass(this.elementRef.nativeElement,className));
  }
  toggleNavMenuList():void{
    if(this.elementRef.nativeElement.classList.contains("d-flex")){
      this.render.removeClass(this.elementRef.nativeElement,"d-flex");
    }else{
      this.render.addClass(this.elementRef.nativeElement,"d-flex");
    }
  }
}
