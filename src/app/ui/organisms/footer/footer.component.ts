import { Component, OnInit } from '@angular/core';

export interface FooterCategoryModel{
  title:string;
  routeLink:string;
}

@Component({
  selector: 'es-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  footerCategoryLinks:FooterCategoryModel[]=[
    {title:"Electronic",routeLink:"electronic"},
    {title:"Electronic",routeLink:"electronic"},
    {title:"Electronic",routeLink:"electronic"},
    {title:"Electronic",routeLink:"electronic"},
    {title:"Electronic",routeLink:"electronic"},
    {title:"Electronic",routeLink:"electronic"},
    {title:"Electronic",routeLink:"electronic"},
    {title:"Electronic",routeLink:"electronic"},
    {title:"Electronic",routeLink:"electronic"},
    {title:"Electronic",routeLink:"electronic"},
    {title:"Electronic",routeLink:"electronic"},
    {title:"Electronic",routeLink:"electronic"},
    {title:"Electronic",routeLink:"electronic"},
    {title:"Electronic",routeLink:"electronic"},
    {title:"Electronic",routeLink:"electronic"},
    {title:"Electronic",routeLink:"electronic"},
    {title:"Electronic",routeLink:"electronic"},
    {title:"Electronic",routeLink:"electronic"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
