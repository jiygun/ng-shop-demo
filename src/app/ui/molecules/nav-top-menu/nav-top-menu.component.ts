import { Component, Input, OnInit } from '@angular/core';


export interface TopNavModel{
  routeLink:string;
  title:string;
}

@Component({
  selector: 'es-nav-top-menu',
  templateUrl: './nav-top-menu.component.html',
  styleUrls: ['./nav-top-menu.component.scss']
})
export class NavTopMenuComponent implements OnInit {

  @Input() classList!:string;

  @Input() navList:TopNavModel[]=[
    {routeLink:'/',title:"Today's Deals"},
    {routeLink:'/',title:"Customer Service"},
    {routeLink:'/',title:"Gaming"},
    {routeLink:'/',title:"Contact Us!"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
