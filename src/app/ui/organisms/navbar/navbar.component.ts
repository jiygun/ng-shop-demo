import { Component, HostBinding, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { faShoppingCart, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface UserNavModel{
  title:string;
  routeLink:string;
}

@Component({
  selector: 'es-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  faUser:IconDefinition=faUser;
  faShoppingCart:IconDefinition=faShoppingCart;
  isMobile:boolean=false;

  userNavModel:UserNavModel[]=[
    {title:"My Account",routeLink:"account"},
    {title:"Orders",routeLink:"orders"},
    {title:"Favorites",routeLink:"favorites"},
    {title:"Messages",routeLink:"messages"},
    {title:"Sign Out",routeLink:"sign-out"},
  ]
  constructor(public viewContainerRef:ViewContainerRef) { }

  ngOnInit(): void {
    this.isMobile=window.innerWidth<1200?true:false;
  }
  @HostListener('window:resize',['$event'])
  onResize(event:any):void{
    this.isMobile=window.innerWidth<1200?true:false;
  }
  setDisplayOfCategoryMenu(){
    
  }
}
