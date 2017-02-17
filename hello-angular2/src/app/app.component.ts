// import the dependencies
import {Component} from '@angular/core';
import { HelloComponent} from './hello.component'

//@Component is a decorator
/*
 A function that adds metadatato a class, its members, or its method arguments.
 Prefixed with an @.
 Angular provides several built-in decorators
 */

@Component({
  selector: 'my-app1',
  template: `<div>
              <h1>Hurray {{name}}</h1>
              <my-hello [pageTitle]='name' (dataAvailable)='onDataAvailable($event)'></my-hello>
            </div>`,
})


//class coded in Typescript
export class AppComponent {
  name: string = 'Angular2, you are awesome !!!';

  onDataAvailable(data:any){
    console.log(data)
  }
}