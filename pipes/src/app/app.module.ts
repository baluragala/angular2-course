import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {PowerOfPipe} from "./powerof.pipe";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, PowerOfPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
