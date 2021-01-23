import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';

export type TitleTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

@Component({
  selector: 'es-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class TitleComponent implements OnChanges {


  @Input() titleType!:TitleTypes;

  @ViewChild('h1',{read:TemplateRef,static:true}) h1!:TemplateRef<HTMLElement>;
  @ViewChild('h2',{read:TemplateRef,static:true}) h2!:TemplateRef<HTMLElement>;
  @ViewChild('h3',{read:TemplateRef,static:true}) h3!:TemplateRef<HTMLElement>;
  @ViewChild('h4',{read:TemplateRef,static:true}) h4!:TemplateRef<HTMLElement>;
  @ViewChild('h5',{read:TemplateRef,static:true}) h5!:TemplateRef<HTMLElement>;
  @ViewChild('h6',{read:TemplateRef,static:true}) h6!:TemplateRef<HTMLElement>;

  titleTemplate!:TemplateRef<HTMLElement>;

  @ViewChild('titleContainer',{read:ViewContainerRef,static:true}) titleContainer!:ViewContainerRef;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.titleType){
      switch (this.titleType) {
        case 'h1':
          this.titleTemplate=this.h1;
          break;
        case 'h2':
          this.titleTemplate=this.h2;
          break;
        case 'h3':
          this.titleTemplate=this.h3;
          break;
        case 'h4':
          this.titleTemplate=this.h4;
          break;
        case 'h5':
          this.titleTemplate=this.h5;
          break;
        case 'h6':
          this.titleTemplate=this.h6;
          break;
        default:
          this.titleTemplate=this.h6;
          break;
      }
    }
  }

}
