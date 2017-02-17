import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Custom Attribute Directive in Angular</h1>
    
    <span>1.</span> <p myHighlight>I am highlighted with custom attribute directive</p>
    <hr/>
    <span>2.</span><p myHighlightWithEvent>Hover on me!!, I change color</p>
    <hr/>
    <span>3.</span><p [myHighlightWithEventAndInput]="color">Hover on me I change color, on your choice of selection below</p>

    <div>
      <input type="radio" name="colors" (click)="color='lightgreen'">Green
      <input type="radio" name="colors" (click)="color='yellow'">Yellow
      <input type="radio" name="colors" (click)="color='cyan'">Cyan
    </div>
    
    <hr/>
    <br/>
    
    
    <p *myUnless="condition">
        (A) This paragraph is displayed because the condition is false.
    </p>

    <p *myUnless="!condition">
      (B) Although the condition is true,
      this paragraph is displayed because myUnless is set to false.
    </p>
    
  `,
})
export class AppComponent {
  color = 'green';
  condition = true;
}
