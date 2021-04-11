import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

enum Titles{
  h1="h1",
  h2="h2",
  h3="h3",
  h4="h4",
  h5="h5",
  h6="h6",
}

@Component({
  selector: 'es-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class TitleComponent implements OnInit {

  selectedTag:string="";

  constructor(private el:ElementRef) {}

  ngOnInit(): void {
    [...this.el.nativeElement.attributes].some((element:any) => {
      Object.keys(Titles).some(key => {
        if(element.name==key){
          this.selectedTag=element.name;
          return;
        }
      });
    });
  }

}
