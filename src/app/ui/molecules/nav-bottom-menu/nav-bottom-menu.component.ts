import { ListComponent } from './../../atoms/list/list.component';
import { Component, Input, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, HostBinding, HostListener } from '@angular/core';
import { faTimes, IconDefinition, faUser, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/core/services/category.service';
import { CategoryModel } from 'src/app/core/models/category/category.model';

@Component({
  selector: 'es-nav-bottom-menu',
  templateUrl: './nav-bottom-menu.component.html',
  styleUrls: ['./nav-bottom-menu.component.scss']
})
export class NavBottomMenuComponent implements OnInit {
  
  @Input() classList!:string;

  categoryList!:CategoryModel[];

  @ViewChild('navMenu',{static:true}) navMenu!:ListComponent;
  @ViewChildren('subList',{read:ElementRef}) subList!:QueryList<ElementRef>;

  faTimes:IconDefinition=faTimes;
  faBack:IconDefinition=faAngleLeft;
  faUser:IconDefinition=faUser;

  isSubMenuOpen:boolean=false;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategoryList().subscribe((categoryList:CategoryModel[])=>{
      this.categoryList=categoryList;
    });
  }
  getSubListWithSection(categoryList:CategoryModel[] | undefined | null,section:number):CategoryModel[]{
    if(!categoryList) return [];
    return categoryList.filter((category:CategoryModel,index:number,categoryList:CategoryModel[])=> {
      if(categoryList.length/3*(section-1)<=index&&index<categoryList.length/3*section) return true;
      else return false;
    });
  }
  toggleSubList(event:any):void{
    if([...this.subList].findIndex((listItem:ElementRef)=>listItem.nativeElement===event.currentTarget.nextSibling)>=0){
      [...this.subList][[...this.subList].findIndex((listItem:ElementRef)=>listItem.nativeElement===event.currentTarget.nextSibling)].nativeElement.classList.add("nav__list-dropdown--show");
      this.isSubMenuOpen=true;
    }else{
      [...this.subList].map((listItem:ElementRef)=>{
        listItem.nativeElement.classList.remove("nav__list-dropdown--show");
      });
      this.isSubMenuOpen=false;
    };
  }
  @HostListener("window:resize",["$event"])
  onResize(event:any){
    if(window.innerWidth>=1200){
      [...this.subList].map((listItem:ElementRef)=>{
        listItem.nativeElement.classList.remove("nav__list-dropdown--show");
      });
      this.isSubMenuOpen=false;
    }
  }

}
