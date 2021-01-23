import { Component, OnInit } from '@angular/core';
import { faAngular, faShopware } from '@fortawesome/free-brands-svg-icons';
import { faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'es-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  fashopware=faShopware;
  fabars=faBars;

  constructor() { }

  ngOnInit(): void {
  }

}
