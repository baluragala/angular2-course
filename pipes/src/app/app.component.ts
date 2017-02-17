import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
              <h1>Hello {{name}}</h1>
              <p>Today is {{today}}</p>
              <p>Today piped {{today | date:format }}</p>
              <p>Today piped, chained {{today | date:format | uppercase }}</p>
              
              <button (click)="toggleFormat()">Toggle Format</button>
              
              <hr/>
              <h3>Power Of</h3>
              <h1>{{ 2 | powerof:10 }}</h1>
              `,
})
export class AppComponent {
  name = 'Angular';
  today = new Date();

  toggle = true; // start with true == shortDate

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

}



