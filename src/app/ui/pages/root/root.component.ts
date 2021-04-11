import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <es-navbar></es-navbar>
      <router-outlet></router-outlet>
      <es-footer></es-footer>
  `,
})
export class RootComponent {
  constructor() { }
}
