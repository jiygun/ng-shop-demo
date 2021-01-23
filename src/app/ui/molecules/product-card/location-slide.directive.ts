import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[locationSlide]'
})
export class LocationSlideDirective implements OnChanges {

  @Input() locationSlideReady!:string;

  private _slideContainer!:HTMLElement;
  private _bannerContainer!:HTMLElement;

  private _slideList!:HTMLElement[];
  private _bannerList!:HTMLElement[];

  private _slideListLength!:number;
  private _sectionWidth!:number;


  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  ngOnChanges(): void {
    if(this.locationSlideReady) {
      this.initProperties();
      this.initBannerListWidth();
      this.renderer.listen(this.elementRef.nativeElement,"mousemove",this.moveSlide.bind(this));
      this.renderer.listen(this.elementRef.nativeElement,"mouseleave",this.stopSlide.bind(this));
    }
  }

  private initProperties(){
    this._slideContainer=this.elementRef.nativeElement;
    this._bannerContainer=this.elementRef.nativeElement.nextSibling;
    this._slideList=[...this.elementRef.nativeElement.children];
    this._bannerList=[...this.elementRef.nativeElement.nextSibling.children];
    this._slideListLength=this._slideList.length-1;
    this._sectionWidth=this._slideContainer.offsetWidth/this._slideListLength;
  }

  private moveSlide(event:MouseEvent):void{
    const xLocation:number=event.clientX-this.elementRef.nativeElement.parentNode.getBoundingClientRect().left;
    const activeSlide:number=Math.round(xLocation/this._sectionWidth>this._slideListLength?this._slideListLength-1:xLocation/this._sectionWidth);
    this.setBannerListToDefault();
    this.setActiveSlide(activeSlide);
    this.setActiveBanner(activeSlide);
    this.setVisibilityOfBannerList(true);
  }
  

  private stopSlide(event:MouseEvent):void{
    this.setVisibilityOfBannerList(false);
    this.setSlideListToDefault();
    this.setBannerListToDefault();
  }

  private initBannerListWidth():void{
    this._bannerList.forEach((bannerItem:HTMLElement)=>{bannerItem.style.width=`calc(${100/this._bannerList.length}% - .25rem)`;});
  }

  private setVisibilityOfBannerList(isVisible:boolean){
    if(isVisible) this._bannerContainer.classList.remove("banner__list-deactive");
    else this._bannerContainer.classList.add("banner__list-deactive");
  }

  private setActiveSlide(slideLocation:number):void{
    this._slideContainer.style.transform = `translate3d(${-this._slideContainer.offsetWidth*slideLocation}px, 0px, 0px)`;
  }

  private setActiveBanner(activeBanner:number):void{
    this._bannerList[activeBanner].classList.add("banner__item--active");
  }

  private setSlideListToDefault():void{
    this._slideContainer.style.transform = `translate3d(0px, 0px, 0px)`;
  }

  private setBannerListToDefault():void{
    this._bannerList.map((bannerItem:HTMLElement)=>{bannerItem.classList.remove("banner__item--active")});
  }

  @HostListener("window:resize",["$event"])
  onResize(){
    this._sectionWidth=this._slideContainer.offsetWidth/this._slideListLength;
  }
}
