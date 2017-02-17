import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LifeToDeathComponent }  from './life-to-death.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, LifeToDeathComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
