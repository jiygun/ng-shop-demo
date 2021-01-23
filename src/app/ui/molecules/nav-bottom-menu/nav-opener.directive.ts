import { ApplicationRef, ComponentFactoryResolver, Directive, ElementRef, Injector, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { BlockGenerator } from '../../atoms/block/block-generator';

@Directive({
  selector: '[navOpener]'
})
export class NavOpenerDirective implements OnInit,OnDestroy {

  private _hoverTimer!:Subscription;

  private _bBlock!:BlockGenerator;
  
  constructor(private elementRef:ElementRef,private renderer:Renderer2,private applicationRef: ApplicationRef,private injector: Injector,private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnDestroy(): void {
    if(this._hoverTimer) this._hoverTimer.unsubscribe();
  }
  ngOnInit(): void {
    this.renderer.listen(this.elementRef.nativeElement,"mouseenter",this.showNavMenu.bind(this));
    this.renderer.listen(this.elementRef.nativeElement,"mouseleave",this.hideNavMenu.bind(this));
  }
  showNavMenu(){
    if(window.innerWidth>1199){
      const mainMenuList:HTMLElement=this.elementRef.nativeElement.children[1];
      this._hoverTimer=timer(150).subscribe(val=>{
        this._bBlock=new BlockGenerator(this.applicationRef,this.injector,this.componentFactoryResolver);
        if(!mainMenuList.classList.contains("d-xl-flex")) mainMenuList.classList.add("d-xl-flex");
      });
    }
  }
  hideNavMenu(){
    if(window.innerWidth>1199){
      if(this._hoverTimer) this._hoverTimer.unsubscribe();
      if(this._bBlock) this._bBlock.deleteBlock();
      const mainMenuList:HTMLElement=this.elementRef.nativeElement.children[1];
      if(mainMenuList.classList.contains("d-xl-flex")) mainMenuList.classList.remove("d-xl-flex");
    }
  }
}
