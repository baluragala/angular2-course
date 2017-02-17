import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <zeo-l2d [data]="name"></zeo-l2d>
`,
})
export class AppComponent {
  name = 'Angular Life Cycle';
}
