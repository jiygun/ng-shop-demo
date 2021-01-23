import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'es-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  faSearch:IconDefinition=faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
